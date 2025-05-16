import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scheduleData = {
    1: [
      {
        time: "08:00 - 09:30",
        title: "Registration & Welcome Tea",
        location: "Main Entrance Hall",
        description: "Participants arrive, collect their welcome kits, and enjoy herbal tea blends based on ancient Ayurvedic recipes.",
        highlight: false
      },
      {
        time: "09:30 - 10:30",
        title: "Opening Ceremony",
        location: "Brahmā Auditorium",
        description: "Traditional lamp lighting (dīpa pradīpana), welcome address, and keynote speech on 'The Confluence of Ancient Wisdom and Modern Innovation'.",
        highlight: true
      },
      {
        time: "10:30 - 11:30",
        title: "Hackathon Theme Unveiling",
        location: "Brahmā Auditorium",
        description: "Presentation of this year's themes, challenges, evaluation criteria, and prizes.",
        highlight: false
      },
      {
        time: "11:30 - 12:30",
        title: "Team Formation & Networking",
        location: "Sarasvatī Hall",
        description: "Interactive session for participants to form teams or find team members based on skills and interests.",
        highlight: false
      },
      {
        time: "12:30 - 14:00",
        title: "Satvic Lunch Break",
        location: "Dining Pavilion",
        description: "Mindful eating with a specially curated vegetarian lunch based on Ayurvedic principles.",
        highlight: false
      },
      {
        time: "14:00 - 15:30",
        title: "Workshop: 'Vedic Mathematics in Algorithm Optimization'",
        location: "Gaṇeśa Workshop Room 1",
        description: "Learn how ancient mathematical techniques can improve algorithm efficiency and performance.",
        highlight: false
      },
      {
        time: "15:30 - 17:00",
        title: "Workshop: 'Sanskrit-Inspired Design Patterns'",
        location: "Gaṇeśa Workshop Room 2",
        description: "Explore how Sanskrit grammar principles can inform modern software architecture and design patterns.",
        highlight: false
      },
      {
        time: "17:00 - 17:30",
        title: "Evening Tea Break",
        location: "Garden Courtyard",
        description: "Refreshments and networking opportunity.",
        highlight: false
      },
      {
        time: "17:30 - 19:00",
        title: "Hackathon Begins: Ideation Phase",
        location: "Various Hacking Zones",
        description: "Teams start brainstorming, conceptualizing their solutions, and creating project plans.",
        highlight: true
      },
      {
        time: "19:00 - 20:30",
        title: "Dinner & Cultural Program",
        location: "Dining Pavilion & Outdoor Stage",
        description: "Enjoy a traditional Indian dinner while witnessing classical dance and music performances.",
        highlight: false
      },
      {
        time: "20:30 - onwards",
        title: "Continued Hacking (Optional)",
        location: "Various Hacking Zones",
        description: "Teams can continue working on their projects or retire for the day.",
        highlight: false
      }
    ],
    2: [
      {
        time: "07:00 - 08:00",
        title: "Morning Yoga Session",
        location: "Garden Courtyard",
        description: "Optional yoga and meditation session to enhance focus and creativity.",
        highlight: false
      },
      {
        time: "08:00 - 09:00",
        title: "Breakfast",
        location: "Dining Pavilion",
        description: "Energizing breakfast to fuel the day's creative work.",
        highlight: false
      },
      {
        time: "09:00 - 12:30",
        title: "Intensive Hacking Session",
        location: "Various Hacking Zones",
        description: "Teams work on developing their prototypes with mentor support available.",
        highlight: true
      },
      {
        time: "10:30 - 11:00",
        title: "Mini-Break: Ayurvedic Refreshments",
        location: "Hacking Zones",
        description: "Quick refreshments served to the teams at their workstations.",
        highlight: false
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        location: "Dining Pavilion",
        description: "Nutritious lunch designed to maintain energy and focus.",
        highlight: false
      },
      {
        time: "13:30 - 14:30",
        title: "Tech Talk: 'AI Ethics: Vedic Perspectives'",
        location: "Brahmā Auditorium",
        description: "Panel discussion on how ancient ethical frameworks can inform modern AI development.",
        highlight: false
      },
      {
        time: "14:30 - 18:00",
        title: "Continued Hacking",
        location: "Various Hacking Zones",
        description: "Teams return to development with periodic mentor check-ins.",
        highlight: false
      },
      {
        time: "16:00 - 16:30",
        title: "Afternoon Tea",
        location: "Hacking Zones",
        description: "Traditional Indian chai and snacks served to teams.",
        highlight: false
      },
      {
        time: "18:00 - 19:00",
        title: "Progress Update Session",
        location: "Sarasvatī Hall",
        description: "Each team gives a 2-minute update on their progress, challenges, and next steps.",
        highlight: true
      },
      {
        time: "19:00 - 20:00",
        title: "Dinner",
        location: "Dining Pavilion",
        description: "Relaxed dinner with opportunity to network with mentors and sponsors.",
        highlight: false
      },
      {
        time: "20:00 - onwards",
        title: "Night Hacking Session",
        location: "Various Hacking Zones",
        description: "Teams continue working on their projects with 24/7 access to the venue.",
        highlight: false
      }
    ],
    3: [
      {
        time: "07:00 - 08:00",
        title: "Sunrise Meditation",
        location: "Garden Courtyard",
        description: "Optional meditation session to prepare mentally for the final day.",
        highlight: false
      },
      {
        time: "08:00 - 09:00",
        title: "Breakfast",
        location: "Dining Pavilion",
        description: "Final day breakfast to energize teams for the last push.",
        highlight: false
      },
      {
        time: "09:00 - 12:00",
        title: "Final Development Sprint",
        location: "Various Hacking Zones",
        description: "Last hours of development before the submission deadline.",
        highlight: true
      },
      {
        time: "12:00",
        title: "Code Freeze & Submission Deadline",
        location: "Online Platform",
        description: "All projects must be submitted through the hackathon platform.",
        highlight: true
      },
      {
        time: "12:00 - 13:00",
        title: "Lunch Break",
        location: "Dining Pavilion",
        description: "Relaxed lunch as teams prepare their presentations.",
        highlight: false
      },
      {
        time: "13:00 - 15:30",
        title: "Preparation Time",
        location: "Practice Rooms",
        description: "Teams prepare and practice their final presentations.",
        highlight: false
      },
      {
        time: "15:30 - 18:00",
        title: "Project Presentations",
        location: "Brahmā Auditorium",
        description: "Each team presents their solution to the judges and audience (5 minutes presentation + 3 minutes Q&A).",
        highlight: true
      },
      {
        time: "18:00 - 19:00",
        title: "Judges Deliberation",
        location: "Private Judges' Chamber",
        description: "Judges evaluate all projects based on the established criteria.",
        highlight: false
      },
      {
        time: "19:00 - 20:30",
        title: "Awards Ceremony & Closing",
        location: "Brahmā Auditorium",
        description: "Announcement of winners, prize distribution, and closing remarks.",
        highlight: true
      },
      {
        time: "20:30 - 22:00",
        title: "Celebration Dinner",
        location: "Garden Courtyard",
        description: "Gala dinner to celebrate the achievements of all participants.",
        highlight: false
      }
    ]
  };

  return (
    <AncientManuscriptContainer>
      <motion.div
        className="manuscript-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements to mimic manuscript */}
        <div className="manuscript-edge left-edge"></div>
        <div className="manuscript-edge right-edge"></div>
        
        <header className="manuscript-header">
          <h1 className="vedic-title">॥ हॅकेथॉन क्रमः ॥</h1>
          <div className="title-translation">Hackathon Schedule</div>
          <div className="manuscript-decoration">
            <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 C20,0 40,20 50,10 C60,0 80,20 100,10" stroke="#4a3520" fill="none" strokeWidth="0.5"/>
              <path d="M50,0 C40,5 30,15 50,20 C70,15 60,5 50,0" stroke="#4a3520" fill="none" strokeWidth="0.5"/>
            </svg>
          </div>
        </header>

        <div className="manuscript-navigation">
          {[1, 2, 3].map(day => (
            <div 
              key={day} 
              className={`day-selector ${activeDay === day ? 'active' : ''}`} 
              onClick={() => setActiveDay(day)}
            >
              <div className="day-indicator">
                <span className="day-circle"></span>
              </div>
              <div className="day-text">
                <span className="day-number">दिवस {day}</span>
                <span className="day-name">
                  {day === 1 ? 'सृष्टि (Creation)' : 
                   day === 2 ? 'स्थिति (Development)' : 
                   'समाप्ति (Completion)'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="manuscript-content">
          {scheduleData[activeDay].map((item, index) => (
            <motion.div
              key={index}
              className={`schedule-item ${item.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03, duration: 0.5 }}
            >
              <div className="time-block">
                <div className="time-marker"></div>
                <span className="time">{item.time}</span>
              </div>
              
              <div className="event-block">
                <h3 className="event-title">{item.title}</h3>
                <div className="event-location">
                  {item.location}
                </div>
                <p className="event-description">{item.description}</p>
                {item.highlight && (
                  <div className="highlight-marker">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="5" fill="#4a3520" opacity="0.5" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="manuscript-footer">
          <div className="decoration-line"></div>
          <div className="footer-note">
            <p>॥ सूचना: कार्यक्रमे परिवर्तनं भवितुम् शक्यते ॥</p>
            <p className="translation">Schedule may be subject to minor changes</p>
          </div>
          
          <div className="navigation-links">
            <Link to="/events" className="manuscript-link">
              <span>All Events</span>
              <span className="link-decoration">❉</span>
            </Link>
            <Link to="/prizes" className="manuscript-link">
              <span>Prizes</span>
              <span className="link-decoration">❉</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </AncientManuscriptContainer>
  );
};

const AncientManuscriptContainer = styled.div`
  font-family: 'Noto Sans', 'Arial', sans-serif;
  padding: 2rem 0;
  min-height: 100vh;
  background-color: #f3f0e6;
  display: flex;
  justify-content: center;
  color: #4a3520;

  .manuscript-page {
    position: relative;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, #e8e0cc 0%, #d6cdb2 100%);
    padding: 3rem 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;

    /* Creating torn page effect */
    &::before, &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 30px;
      top: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='1000' viewBox='0 0 30 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L5,20 L0,40 L8,60 L0,80 L4,100 L0,120 L10,140 L0,160 L5,180 L0,200 L8,220 L0,240 L4,260 L0,280 L6,300 L0,320 L7,340 L0,360 L5,380 L0,400 L8,420 L0,440 L4,460 L0,480 L6,500 L0,520 L7,540 L0,560 L5,580 L0,600 L8,620 L0,640 L4,660 L0,680 L6,700 L0,720 L7,740 L0,760 L5,780 L0,800 L8,820 L0,840 L4,860 L0,880 L6,900 L0,920 L7,940 L0,960 L5,980 L0,1000' stroke='%23d6cdb2' fill='%23f3f0e6' stroke-width='0.5'/%3E%3C/svg%3E");
      background-repeat: repeat-y;
      z-index: 1;
    }

    &::before {
      left: 0;
      transform: scaleX(-1);
    }

    &::after {
      right: 0;
    }
  }

  .manuscript-edge {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(74, 53, 32, 0.2);
    z-index: 2;
    
    &.left-edge {
      left: 30px;
    }
    
    &.right-edge {
      right: 30px;
    }
  }

  .manuscript-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 2;
    
    .vedic-title {
      font-family: 'Noto Sans', 'Arial', sans-serif;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #4a3520;
      letter-spacing: 1px;
    }
    
    .title-translation {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      font-style: italic;
      color: #6c5b40;
    }
    
    .manuscript-decoration {
      width: 60%;
      margin: 0 auto;
      opacity: 0.6;
    }
  }

  .manuscript-navigation {
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
    padding: 0 10%;
    position: relative;
    z-index: 2;
    
    .day-selector {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
      border-bottom: 1px dashed rgba(74, 53, 32, 0.2);
      
      &:hover, &.active {
        border-bottom: 1px dashed rgba(74, 53, 32, 0.8);
        
        .day-circle {
          background-color: #4a3520;
        }
        
        .day-number, .day-name {
          color: #000;
        }
      }
      
      .day-indicator {
        margin-right: 1rem;
        
        .day-circle {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #4a3520;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
      }
      
      .day-text {
        display: flex;
        flex-direction: column;
        
        .day-number {
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        
        .day-name {
          font-size: 0.9rem;
          opacity: 0.8;
        }
      }
    }
  }

  .manuscript-content {
    position: relative;
    padding: 0 3rem;
    z-index: 2;
    
    /* Ancient manuscript line pattern */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: linear-gradient(
        transparent 19px,
        rgba(74, 53, 32, 0.05) 20px
      );
      background-size: 100% 20px;
      z-index: -1;
      pointer-events: none;
    }
    
    /* Creating a stained/aged paper effect with subtle spots */
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: radial-gradient(
        circle at 50% 50%, 
        rgba(165, 132, 66, 0.1) 0%, 
        rgba(165, 132, 66, 0.05) 50%,
        transparent 70%
      );
      background-size: 80px 80px;
      background-position: 0 0, 40px 40px;
      z-index: -1;
      opacity: 0.4;
      pointer-events: none;
    }
  }

  .schedule-item {
    display: flex;
    margin-bottom: 2.5rem;
    position: relative;
    
    &.highlight {
      .time-block .time {
        color: #5d3a17;
        font-weight: bold;
      }
      
      .event-block {
        .event-title {
          color: #5d3a17;
        }
        
        &::before {
          border-color: rgba(93, 58, 23, 0.4);
        }
      }
    }
    
    .time-block {
      width: 120px;
      flex-shrink: 0;
      position: relative;
      padding-right: 20px;
      
      .time-marker {
        position: absolute;
        right: 0;
        top: 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #4a3520;
        background-color: #e8e0cc;
      }
      
      .time {
        font-size: 0.9rem;
        color: #6c5b40;
        white-space: nowrap;
      }
    }
    
    .event-block {
      flex-grow: 1;
      padding: 1rem 1.5rem;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
        background-image: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(74, 53, 32, 0.2) 20%,
          rgba(74, 53, 32, 0.2) 80%,
          transparent 100%
        );
      }
      
      .event-title {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #4a3520;
        font-weight: 600;
      }
      
      .event-location {
        font-size: 0.9rem;
        margin-bottom: 0.6rem;
        color: #6c5b40;
        font-style: italic;
      }
      
      .event-description {
        font-size: 0.95rem;
        line-height: 1.5;
        color: #4a3520;
      }
      
      .highlight-marker {
        position: absolute;
        right: 0;
        top: 0;
        width: 15px;
        height: 15px;
      }
    }
  }

  .manuscript-footer {
    margin-top: 4rem;
    padding-top: 2rem;
    position: relative;
    z-index: 2;
    
    .decoration-line {
      width: 100%;
      height: 3px;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='3' viewBox='0 0 100 3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,1.5 Q10,0 20,1.5 T40,1.5 T60,1.5 T80,1.5 T100,1.5' stroke='%234a3520' fill='none' stroke-width='0.5' stroke-dasharray='1,2'/%3E%3C/svg%3E");
      background-repeat: repeat-x;
      margin-bottom: 2rem;
    }
    
    .footer-note {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      
      .translation {
        font-style: italic;
        color: #6c5b40;
        margin-top: 0.5rem;
      }
    }
    
    .navigation-links {
      display: flex;
      justify-content: center;
      
      .manuscript-link {
        margin: 0 1.5rem;
        color: #4a3520;
        text-decoration: none;
        position: relative;
        
        &:hover {
          text-decoration: underline;
          
          .link-decoration {
            transform: rotate(90deg);
          }
        }
        
        .link-decoration {
          display: inline-block;
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .manuscript-page {
      padding: 2rem 1.5rem;
    }
    
    .manuscript-navigation {
      flex-direction: column;
      align-items: center;
      
      .day-selector {
        margin-bottom: 0.5rem;
      }
    }
    
    .manuscript-content {
      padding: 0 1rem;
    }
    
    .schedule-item {
      flex-direction: column;
      
      .time-block {
        width: 100%;
        margin-bottom: 0.8rem;
        
        .time-marker {
          display: none;
        }
      }
      
      .event-block {
        padding-top: 0;
        
        &::before {
          display: none;
        }
      }
    }
  }
  
  @media (max-width: 576px) {
    .manuscript-header .vedic-title {
      font-size: 1.8rem;
    }
  }
`;

export default Schedule;