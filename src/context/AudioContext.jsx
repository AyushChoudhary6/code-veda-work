import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import fluteAudio from '../assets/audio/flute-bg.mp3';

// Available audio track
const AUDIO_FILE = fluteAudio;

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef(null);
  
  // Set up audio element once on component mount
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(AUDIO_FILE);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Fixed comfortable volume level
    audioRef.current.preload = 'auto'; // Preload the audio file
    
    // Mark as initialized
    setIsInitialized(true);
    
    // Clean up when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle user interaction to initialize audio
  // This helps with browser autoplay restrictions
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!isInitialized) return;
      
      // Remove event listeners once we've handled interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isInitialized]);

  // Toggle play/pause function
  const toggleAudio = () => {
    if (!audioRef.current || !isInitialized) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Using promise to handle autoplay restrictions in browsers
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Audio playback failed:", error);
              // Reset playing state if autoplay was blocked
              setIsPlaying(false);
            });
        }
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
      setIsPlaying(false);
    }
  };return (
    <AudioContext.Provider value={{ 
      isPlaying, 
      toggleAudio
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => useContext(AudioContext);
