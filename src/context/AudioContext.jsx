import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import fluteAudio from '../assets/audio/flute-bg.mp3';

// Available audio track
const AUDIO_FILE = fluteAudio;

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef(null);
  
  // Toggle play/pause function - moved to the top to avoid initialization error
  const toggleAudio = () => {
    if (!audioRef.current || !isInitialized) return;
    
    try {
      if (isPlaying) {
        // Pause the audio
        audioRef.current.pause();
        setIsPlaying(false);
        console.log("Audio paused");
        
        // Update session storage immediately
        sessionStorage.setItem('audioPlaying', 'false');
      } else {
        // Make sure the audio is at the right volume and time
        audioRef.current.volume = 0.4;
        
        // If audio has ended, reset to beginning
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0;
        }
        
        // Using promise to handle autoplay restrictions in browsers
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
              setIsPlaying(true);
              console.log("Audio playing");
              
              // Update session storage immediately
              sessionStorage.setItem('audioPlaying', 'true');
              
              // Add a one-time ended event listener to reset state when audio ends
              const handleEnded = () => {
                setIsPlaying(false);
                sessionStorage.setItem('audioPlaying', 'false');
                audioRef.current.removeEventListener('ended', handleEnded);
              };
              
              audioRef.current.addEventListener('ended', handleEnded);
            })
            .catch(error => {
              console.error("Audio playback failed:", error);
              // Reset playing state if autoplay was blocked
              setIsPlaying(false);
              sessionStorage.setItem('audioPlaying', 'false');
              
              // Try to unlock audio on iOS
              if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
                audioRef.current.load(); // This can help on iOS
              }
            });
        }
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
      setIsPlaying(false);
      sessionStorage.setItem('audioPlaying', 'false');
    }
  };

  // Set up audio element once on component mount
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(AUDIO_FILE);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Fixed comfortable volume level
    audioRef.current.preload = 'auto'; // Preload the audio file
    
    // Force preload for browsers that don't respect the preload attribute
    const preloadAudio = () => {
      // Create a temporary fetch to make sure the browser caches the audio
      fetch(AUDIO_FILE)
        .then(response => {
          console.log("Audio file preloaded");
          // Mark as initialized once we know the file is accessible
          setIsInitialized(true);
        })
        .catch(err => {
          console.error("Failed to preload audio file:", err);
          // Still mark as initialized so we can at least try to play
          setIsInitialized(true);
        });
    };
    
    // Try to preload the audio file
    preloadAudio();
    
    // Add audio error handling
    const handleAudioError = (e) => {
      console.error("Audio error:", e);
    };
    
    audioRef.current.addEventListener('error', handleAudioError);
    
    // Clean up when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('error', handleAudioError);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Handle user interaction to initialize audio
  // This helps with browser autoplay restrictions
  useEffect(() => {
    // Flag to track if we've successfully unlocked audio
    let audioUnlocked = false;
    
    const handleUserInteraction = () => {
      if (!isInitialized || audioUnlocked) return;
      
      // Try to play audio once user interacts with the page
      if (audioRef.current) {
        // For iOS Safari, set a very short audio element
        audioRef.current.currentTime = 0;
        audioRef.current.play()
          .then(() => {
            // Successfully started playing
            audioRef.current.pause(); // Pause immediately, we just want to unlock audio
            audioRef.current.currentTime = 0; // Reset time
            console.log("Audio initialized successfully");
            audioUnlocked = true;
            
            // If there was a previous playing state, restore it
            const previousState = sessionStorage.getItem('audioPlaying');
            if (previousState === 'true') {
              setTimeout(() => toggleAudio(), 300); // Small delay before starting playback
            }
            
            // Remove event listeners since we've unlocked audio
            cleanupListeners();
          })
          .catch(error => {
            console.error("Initial audio unlock failed:", error);
            
            // Try a different approach for iOS
            if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
              audioRef.current.load();
            }
          });
      }
    };
    
    // Multiple types of user interactions to try to unlock audio
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('touchend', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    
    const cleanupListeners = () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
    
    return cleanupListeners;
  }, [isInitialized, toggleAudio]);
  
  // Save and restore audio state when navigating between pages
  useEffect(() => {
    // Check if we have a saved audio state
    const savedAudioState = sessionStorage.getItem('audioPlaying');
    const hasEntered = sessionStorage.getItem('hasEntered');
    
    if (savedAudioState === 'true' && isInitialized && audioRef.current) {
      // Try to resume audio if it was playing before navigation
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("Audio state restored successfully");
        })
        .catch(error => {
          console.error("Failed to restore audio state:", error);
          // If failed to auto-resume, update session storage to reflect actual state
          sessionStorage.setItem('audioPlaying', 'false');
        });
    }
    
    // If user has entered the site and audio isn't playing, try to auto-play
    if (hasEntered === 'true' && !isPlaying && isInitialized && audioRef.current && savedAudioState !== 'false') {
      console.log("User has entered site, trying to start audio");
    }
    
    // Update session storage whenever audio state changes
    if (isInitialized) {
      sessionStorage.setItem('audioPlaying', isPlaying);
    }

    // Add event listeners to detect when tab visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden, save current state
        sessionStorage.setItem('audioPlaying', isPlaying);
      } else if (isPlaying) {
        // Tab is visible again, resume if it was playing
        audioRef.current?.play().catch(err => console.log('Could not resume audio on visibility change:', err));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, isInitialized]);
  
  return (
    <AudioContext.Provider value={{ 
      isPlaying, 
      toggleAudio
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);
