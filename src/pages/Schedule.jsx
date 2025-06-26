import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // We're only keeping Day 1 as requested
  const scheduleData = {
    1: [
      {
        title: "Introduction",
        highlight: true,
        description: `Welcome to Code Veda, a unique hackathon themed "Digital Dharma" where innovation meets intention. Inspired by timeless Vedic values, Code Veda champions ethical and purposeful coding that aligns with truth (Satya), duty (Dharma), and selfless service (Seva). This is more than just a tech event, it's a call to create solutions that not only solve problems but also uphold principles that guide a responsible and compassionate digital future. Join us as we code with conscience and build with purpose.`
      },
      {
        title: "Overview",
        highlight: true,
        description: `• Team Size: 2–4 Members 
        • Eligibility: Open to all Tech Enthusiast Students 
        • Mode: Hybrid (Online and Offline)
        • Final Round Venue: Masters' Union`
      },
      {
        title: "Timeline",
        highlight: true,
        description: `➤ 20 August - Registration closes
➤ 15 July–25 August - PPT submission
➤ 1 September - PPT round result
➤ 7 September - Online Round
➤ 8 September - Online round result (Tentative)
➤ 16–17 September - Offline round`
      },
      {
        title: "Code Of Conduct",
        highlight: true,
        description: `As part of our commitment to fostering a safe, respectful, and inclusive environment during the hackathon, we kindly remind you to immediately report any inappropriate behavior to the organizing team.

**Consequences of Inappropriate Behavior:**
• Verbal Warning (for minor infractions)
• Immediate Disqualification from the hackathon
• Removal from the event venue
• Permanent ban from future events`
      },
      {
        title: "Tracks",
        highlight: true,
        description: `• Code For Karma • Open Innovation • Healthcare • IoT • AR/VR • Sustainable Development • App Development`
      },
      {
        title: "Phase Details",
        highlight: true,
        isHeader: true,
        description: ``
      },
      {
        title: "Phase 1: Registrations",
        highlight: true,
        description: `➤ Registrations will be open till 20th August 2025
➤ All participants are expected to form teams of 2-4 members
➤ No changes will be allowed in team structure after registration closes`
      },
      {
        title: "Phase 2: PPT Submission",
        highlight: true,
        description: `➤ PPT submission starts on 15th July 2025
➤ Deadline for PPT submission is 25th August 2025
➤ Project description should be added alongside the PPT`
      },
      {
        title: "Phase 3: Online Round",
        highlight: true,
        description: `➤ Online round will be conducted on 7th September 2025
➤ Shortlisted teams from the PPT round will move to the online round
➤ Results of this round will be declared next day, i.e. on 8th September 2025`
      },
      {
        title: "Requirements",
        highlight: true,
        description: `• Github Repository
• Idea Presentation`
      },
      {
        title: "Rules",
        highlight: true,
        description: `• Presentation should clearly outline approach and scope
• Allowed Tools: Any open-source framework and libraries`
      },
      {
        title: "Phase 4: Offline Round",
        highlight: true,
        description: `➤ Offline round will be conducted on 16th-17th September 2025 at Masters' Union
➤ It will be a 24 hours high energy hackathon`
      },
      {
        title: "Schedule",
        highlight: true,
        time: "16-17 Sep 2025",
        description: `• Opening Ceremony: 11a.m. -12 p.m. - Angaar Batch Session
• PW session
• Lunch Break
• Project Development, mentoring and evaluation
• Judging Session
• Results
• Prize Distribution
• Closing`
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
          <div className="day-selector active">
            <div className="day-indicator">
              <span className="day-circle"></span>
            </div>
            <div className="day-text">
              <span className="day-number">दिवस 1</span>
              <span className="day-name">सृष्टि (Creation)</span>
            </div>
          </div>
        </div>
        

        <div className="manuscript-content">
          {scheduleData[1].map((item, index) => (
            <motion.div
              key={index}
              className={`schedule-item ${item.highlight ? 'highlight' : ''} ${item.isHeader ? 'section-header' : ''}`}
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
                {item.location && (
                  <div className="event-location">
                    {item.location}
                  </div>
                )}
                {!item.isHeader && (
                  <div className="event-description">{item.description}</div>
                )}
                {item.highlight && !item.isHeader && (
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
          font-weight: 700;
          font-size: 1.3rem;
          border-bottom: 1px solid rgba(93, 58, 23, 0.2);
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        
        &::before {
          border-color: rgba(93, 58, 23, 0.4);
        }
      }
    }
    
    &.section-header {
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
      
      .event-block {
        .event-title {
          color: #422600;
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 2px solid rgba(93, 58, 23, 0.4);
          padding-bottom: 0.5rem;
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
    }      .event-block {
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
        letter-spacing: 0.3px;
      }
      
      .event-location {
        font-size: 0.9rem;
        margin-bottom: 0.6rem;
        color: #6c5b40;
        font-style: italic;
      }
      
      .event-description {
        font-size: 0.95rem;
        line-height: 1.8;
        color: #4a3520;
        white-space: pre-line;
        margin-bottom: 0;
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