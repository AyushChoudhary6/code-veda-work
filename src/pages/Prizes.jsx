import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Prizes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prizes = [
    {
      title: "Grand Prize - Golden Lotus",
      description: "For the most innovative solution that beautifully integrates Vedic principles with modern technology",
      rewards: [
        "₹100,000 Cash Prize",
        "Startup Incubation Opportunity",
        "Mentorship from Industry Leaders",
        "Exclusive Golden Lotus Trophy"
      ],
      iconClass: "grand"
    },
    {
      title: "Silver Chakra Award",
      description: "For the most technically impressive implementation",
      rewards: [
        "₹50,000 Cash Prize",
        "6-Month Professional Development Program",
        "Silver Chakra Trophy"
      ],
      iconClass: "silver"
    },
    {
      title: "Bronze Mandala Award",
      description: "For the most user-friendly and accessible solution",
      rewards: [
        "₹25,000 Cash Prize", 
        "3-Month Mentorship Program", 
        "Bronze Mandala Trophy"
      ],
      iconClass: "bronze"
    },
    {
      title: "Sustainable Innovation Award",
      description: "For the solution with the most positive environmental impact",
      rewards: [
        "₹20,000 Cash Prize",
        "Networking Opportunities with Sustainability Experts",
        "Featured in Sustainability Tech Magazine"
      ],
      iconClass: "eco"
    },
    {
      title: "Cultural Heritage Award",
      description: "For the project that best preserves and promotes cultural heritage",
      rewards: [
        "₹20,000 Cash Prize",
        "Opportunity to Present at Cultural Tech Symposium",
        "Heritage Preservation Partnership"
      ],
      iconClass: "cultural"
    },
    {
      title: "People's Choice Award",
      description: "Voted by all attendees during the final presentation",
      rewards: [
        "₹15,000 Cash Prize",
        "Community Recognition",
        "Special Feature on CodeVeda Website"
      ],
      iconClass: "people"
    },
  ];

  return (
    <PrizesContainer>
      <motion.div 
        className="bg-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="heading-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Prizes & Awards</h1>
        <p>Celebrating excellence in integrating Vedic wisdom with modern technology</p>
      </motion.div>
      
      <PrizesGrid>
        {prizes.map((prize, index) => (
          <PrizeCard 
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <IconCircle className={prize.iconClass}>
              <PrizeIcon className={prize.iconClass} />
            </IconCircle>
            <h2>{prize.title}</h2>
            <p className="description">{prize.description}</p>
            <RewardsList>
              {prize.rewards.map((reward, rewardIndex) => (
                <li key={rewardIndex}>{reward}</li>
              ))}
            </RewardsList>
          </PrizeCard>
        ))}
      </PrizesGrid>
      
      <motion.div 
        className="special-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Additional Perks for All Participants</h2>
        <PerksContainer>
          <PerkItem>
            <PerkIcon className="certificate" />
            <div>
              <h3>Certificate of Participation</h3>
              <p>All participants will receive a certificate recognizing their contribution to the CodeVeda initiative.</p>
            </div>
          </PerkItem>
          <PerkItem>
            <PerkIcon className="swag" />
            <div>
              <h3>Exclusive Swag Kit</h3>
              <p>Specially designed CodeVeda t-shirts, stickers, and eco-friendly merchandise.</p>
            </div>
          </PerkItem>
          <PerkItem>
            <PerkIcon className="network" />
            <div>
              <h3>Networking Opportunities</h3>
              <p>Connect with industry professionals, potential employers, and like-minded innovators.</p>
            </div>
          </PerkItem>
          <PerkItem>
            <PerkIcon className="learning" />
            <div>
              <h3>Learning Resources</h3>
              <p>Access to exclusive workshops, learning materials on Vedic principles and modern technology.</p>
            </div>
          </PerkItem>
        </PerksContainer>
      </motion.div>
    </PrizesContainer>
  );
};

const PrizesContainer = styled.div`
  position: relative;
  padding: 120px 2rem 80px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #f0f0f0;
  min-height: 100vh;
  
  .bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }
  
  .heading-container {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 4rem;
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #FF6B35, #f39c12);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    p {
      font-size: 1.2rem;
      color: #ccc;
      max-width: 800px;
      margin: 0 auto;
    }
  }
  
  .special-note {
    position: relative;
    z-index: 1;
    margin-top: 6rem;
    text-align: center;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #FF6B35;
    }
  }
  
  @media (max-width: 768px) {
    padding: 100px 1rem 60px;
    
    .heading-container h1 {
      font-size: 2.5rem;
    }
  }
`;

const PrizesGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrizeCard = styled.div`
  background: rgba(30, 30, 30, 0.7);
  border-radius: 10px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  h2 {
    font-size: 1.8rem;
    margin: 1.5rem 0 1rem;
    color: #FF6B35;
  }
  
  .description {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  
  &:hover {
    border-color: rgba(255, 107, 53, 0.5);
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.15);
  
  &.grand {
    background: linear-gradient(135deg, #FFD700, #FFA500);
  }
  
  &.silver {
    background: linear-gradient(135deg, #C0C0C0, #A9A9A9);
  }
  
  &.bronze {
    background: linear-gradient(135deg, #CD7F32, #8B4513);
  }
  
  &.eco {
    background: linear-gradient(135deg, #4CAF50, #2E7D32);
  }
  
  &.cultural {
    background: linear-gradient(135deg, #9C27B0, #6A1B9A);
  }
  
  &.people {
    background: linear-gradient(135deg, #2196F3, #0D47A1);
  }
`;

const PrizeIcon = styled.div`
  width: 40px;
  height: 40px;
  
  &.grand {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 1L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 1Z'/%3E%3C/svg%3E");
  }
  
  &.silver {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 1L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 1Z'/%3E%3C/svg%3E");
  }
  
  &.bronze {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 1L9 9H2L7 14L5 22L12 17L19 22L17 14L22 9H15L12 1Z'/%3E%3C/svg%3E");
  }
  
  &.eco {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z'/%3E%3C/svg%3E");
  }
  
  &.cultural {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E");
  }
  
  &.people {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E");
  }
`;

const RewardsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  
  li {
    padding: 0.8rem 0;
    border-top: 1px dashed rgba(255, 255, 255, 0.1);
    font-size: 0.95rem;
    color: #ddd;
    
    &:first-child {
      font-weight: bold;
      color: #FF6B35;
    }
  }
`;

const PerksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PerkItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 10px;
  border: 1px solid rgba(255, 107, 53, 0.2);
  transition: all 0.3s ease;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #FF6B35;
  }
  
  p {
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  &:hover {
    border-color: rgba(255, 107, 53, 0.5);
    transform: translateY(-5px);
  }
`;

const PerkIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  
  &.certificate {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B35' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M11,13H15V16H11V13M11,9H15V12H11V9M7,13H10V16H7V13M7,9H10V12H7V9Z'/%3E%3C/svg%3E");
  }
  
  &.swag {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B35' d='M22.47,5.2C22,4.96 21.51,4.76 21,4.59v12.03C19.86,16.21 18.69,16 17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48C10.38,4.55 8.51,4 6.5,4C4.71,4 3.02,4.44 1.53,5.2C1.2,5.36 1,5.71 1,6.08v12.08c0,0.58 0.47,0.99 1,0.99c0.16,0 0.32,-0.04 0.48,-0.12C3.69,18.4 5.05,18 6.5,18c2.07,0 3.98,0.82 5.5,2c1.52,-1.18 3.43,-2 5.5,-2c1.45,0 2.81,0.4 4.02,1.04c0.16,0.08 0.32,0.12 0.48,0.12c0.52,0 1,-0.41 1,-0.99V6.08c0,-0.37 -0.2,-0.72 -0.53,-0.88z'/%3E%3C/svg%3E");
  }
  
  &.network {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B35' d='M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z'/%3E%3C/svg%3E");
  }
  
  &.learning {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B35' d='M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z'/%3E%3C/svg%3E");
  }
`;

export default Prizes;
