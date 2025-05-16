import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "Opening Ceremony",
      date: "August 15, 2025",
      time: "10:00 AM - 11:30 AM",
      venue: "Main Auditorium",
      description: "Join us for the grand opening ceremony of CodeVeda 2025, featuring keynote speeches from industry leaders, traditional vedic chanting, and an overview of the exciting hackathon ahead.",
      image: "/assets/images/events/opening.jpg",
      highlights: [
        "Inaugural lamp lighting ceremony",
        "Keynote by Dr. Ramesh Sharma, CTO of TechVeda",
        "Traditional Vedic chanting and blessings",
        "Overview of hackathon themes and challenges"
      ]
    },
    {
      title: "Vedic Mathematics Workshop",
      date: "August 15, 2025",
      time: "1:00 PM - 3:00 PM",
      venue: "Workshop Hall A",
      description: "Learn how ancient Vedic mathematical techniques can be applied to modern algorithm design and optimization problems. This hands-on workshop will demonstrate the surprising efficiency of these ancient methods.",
      image: "/assets/images/events/math-workshop.jpg",
      highlights: [
        "Introduction to Vedic mathematical sutras",
        "Algorithmic applications of Vedic mathematics",
        "Optimization techniques from ancient texts",
        "Hands-on problem-solving session"
      ]
    },
    {
      title: "Sustainable Coding Practices Panel",
      date: "August 16, 2025",
      time: "11:00 AM - 12:30 PM",
      venue: "Panel Room B",
      description: "Join our expert panel as they discuss how Vedic principles of sustainability can be applied to modern software development practices to create more efficient, ethical, and environmentally-friendly code.",
      image: "/assets/images/events/sustainable-coding.jpg",
      highlights: [
        "Green coding principles and practices",
        "Reducing digital carbon footprint",
        "Ethical considerations in AI development",
        "Q&A with sustainability experts"
      ]
    },
    {
      title: "Evening Yoga & Meditation",
      date: "August 16, 2025",
      time: "6:00 PM - 7:00 PM",
      venue: "Meditation Garden",
      description: "Take a rejuvenating break from coding with our guided yoga and meditation session. Learn techniques to improve focus, reduce stress, and enhance your creative problem-solving abilities.",
      image: "/assets/images/events/yoga.jpg",
      highlights: [
        "Guided yoga asanas for programmers",
        "Meditation techniques for improved focus",
        "Pranayama breathing exercises",
        "Mindfulness practices for better coding"
      ]
    },
    {
      title: "Cultural Showcase",
      date: "August 16, 2025",
      time: "8:00 PM - 9:30 PM",
      venue: "Main Auditorium",
      description: "Experience the rich cultural heritage that inspires CodeVeda with performances of classical music, dance, and artistic expressions that bridge ancient wisdom with contemporary creativity.",
      image: "/assets/images/events/cultural.jpg",
      highlights: [
        "Classical dance performances",
        "Live Carnatic and Hindustani music",
        "Spoken word poetry combining tech and tradition",
        "Interactive art installations"
      ]
    },
    {
      title: "Closing Ceremony & Awards",
      date: "August 17, 2025",
      time: "5:00 PM - 7:00 PM",
      venue: "Main Auditorium",
      description: "Join us for the grand finale of CodeVeda 2025 as we celebrate the achievements of all participants, announce the winners, and reflect on the journey of merging ancient wisdom with modern technology.",
      image: "/assets/images/events/closing.jpg",
      highlights: [
        "Project showcase from top teams",
        "Awards presentation ceremony",
        "Closing remarks by organizing committee",
        "Networking reception"
      ]
    },
  ];

  return (
    <EventsContainer>      <motion.div 
        className="mandala-decoration"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.05, rotate: 360 }}
        transition={{ opacity: { duration: 1 }, rotate: { duration: 120, repeat: Infinity, ease: "linear" } }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heading-container"
      >
        <div className="om-symbol">ॐ</div>
        <h1 className="vedic-heading">Sacred Gatherings</h1>
        <div className="sanskrit-divider">॥ कार्यक्रमाः ॥</div>
        <p>Experience the divine convergence of ancient wisdom and modern innovation</p>
      </motion.div>
        <EventsList>
        {events.map((event, index) => {
          // Define Vedic symbols based on event type
          let vedicSymbol = "॥"; // Default symbol
          if (event.title.includes("Workshop")) vedicSymbol = "॰";
          else if (event.title.includes("Panel")) vedicSymbol = "ꣾ";
          else if (event.title.includes("Yoga") || event.title.includes("Meditation")) vedicSymbol = "ॐ";
          else if (event.title.includes("Cultural")) vedicSymbol = "ऋ";
          else if (event.title.includes("Closing")) vedicSymbol = "ꣳ";
          
          return (
            <EventCard 
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <EventImagePlaceholder>
                <span className="event-number">{index + 1}</span>
                <span className="event-symbol">{vedicSymbol}</span>
              </EventImagePlaceholder>
              <EventContent>
                <div className="event-header">
                  <h2>{event.title}</h2>
                  <EventMeta>
                    <span className="date">{event.date}</span>
                    <span className="time">{event.time}</span>
                    <span className="venue">{event.venue}</span>
                  </EventMeta>
                </div>
                <p className="description">{event.description}</p>
                <EventHighlights>
                  <h3>Highlights</h3>
                  <ul>
                    {event.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </EventHighlights>
              </EventContent>
            </EventCard>
          );
        })}
      </EventsList>
      
      <ScheduleLink
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>View our complete hackathon schedule to plan your CodeVeda experience</p>
        <Link to="/schedule">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Complete Schedule
          </motion.button>
        </Link>
      </ScheduleLink>
    </EventsContainer>
  );
};

const EventsContainer = styled.div`
  position: relative;
  padding: 120px 2rem 80px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #f0f0f0;
  min-height: 100vh;
  
  .mandala-decoration {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 80vw;
    max-width: 1200px;
    max-height: 1200px;
    background-image: url('../assets/images/mandala-pattern.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 0;
  }
  
  .heading-container {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 4rem;
    
    .om-symbol {
      font-family: var(--font-sanskrit);
      font-size: 3rem;
      color: var(--color-saffron);
      margin-bottom: 1rem;
    }
    
    h1 {
      font-family: var(--font-display);
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-saffron);
    }
    
    .sanskrit-divider {
      font-family: var(--font-sanskrit);
      font-size: 1.5rem;
      color: var(--color-gold);
      margin-bottom: 1.5rem;
    }
    
    p {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      color: #ccc;
      max-width: 800px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    padding: 100px 1rem 60px;
    
    .heading-container h1 {
      font-size: 2.5rem;
    }
  }
`;

const EventsList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const EventCard = styled.div`
  display: flex;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 10px;
  margin-bottom: 2.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 107, 53, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 107, 53, 0.5);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventImagePlaceholder = styled.div`
  width: 280px;
  min-height: 280px;
  background: linear-gradient(45deg, #FF6B35 0%, #f39c12 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('../assets/images/mandala-pattern.svg');
    background-size: contain;
    background-position: center;
    opacity: 0.08;
    pointer-events: none;
  }
  
  .event-number {
    font-family: var(--font-display);
    font-size: 3.5rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
  }
  
  .event-symbol {
    font-family: var(--font-sanskrit);
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.6);
    display: block;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
    min-height: unset;
    
    .event-number {
      font-size: 2.5rem;
    }
    
    .event-symbol {
      font-size: 1.8rem;
    }
  }
`;

const EventContent = styled.div`
  flex: 1;
  padding: 2rem;
  
  .event-header {
    margin-bottom: 1.5rem;
    
    h2 {
      font-size: 1.8rem;
      color: #FF6B35;
      margin-bottom: 0.5rem;
    }
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: #ddd;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    .event-header h2 {
      font-size: 1.5rem;
    }
  }
`;

const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #aaa;
  
  span {
    display: flex;
    align-items: center;
    
    &:before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #FF6B35;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
`;

const EventHighlights = styled.div`
  h3 {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 0.8rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      color: #bbb;
      
      &:before {
        content: "॥";
        position: absolute;
        left: 0;
        color: #FF6B35;
      }
    }
  }
`;

const ScheduleLink = styled.div`
  text-align: center;
  margin-top: 4rem;
  position: relative;
  padding: 2rem 0;
  
  .decorative-line {
    height: 3px;
    max-width: 300px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(90deg, 
      rgba(255,153,51,0) 0%, 
      rgba(255,153,51,0.5) 50%, 
      rgba(255,153,51,0) 100%
    );
    
    &:last-of-type {
      margin: 1.5rem auto 0;
    }
  }
  
  p {
    font-family: var(--font-sanskrit);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--color-gold);
  }
  
  button {
    font-family: var(--font-primary);
    background: linear-gradient(to right, #FF6B35, #f39c12);
    color: #fff;
    border: none;
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(255, 107, 53, 0.3);
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: linear-gradient(45deg, #FF6B35, #f39c12, #FF6B35);
      background-size: 200% 200%;
      animation: shimmer 2s infinite linear;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: -1;
    }
    
    &:hover {
      box-shadow: 0 6px 15px rgba(255, 107, 53, 0.5);
      transform: translateY(-2px);
      
      &:before {
        opacity: 0.3;
      }
    }
  }
  
  @keyframes shimmer {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 200%; }
  }
`;

export default Events;