import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Lead Organizer',
      image: '/src/assets/images/team/arjun.jpg',
      bio: 'Passionate about bringing ancient wisdom into modern technology.',
      social: {
        linkedin: 'https://linkedin.com/in/arjunsharma',
        github: 'https://github.com/arjunsharma'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Technical Lead',
      image: '/src/assets/images/team/priya.jpg',
      bio: 'Full-stack developer with expertise in React and Node.js.',
      social: {
        linkedin: 'https://linkedin.com/in/priyapatel',
        github: 'https://github.com/priyapatel'
      }
    },
    {
      name: 'Rahul Mehta',
      role: 'Design Lead',
      image: '/src/assets/images/team/rahul.jpg',
      bio: 'UX designer focused on creating meaningful digital experiences.',
      social: {
        linkedin: 'https://linkedin.com/in/rahulmehta',
        github: 'https://github.com/rahulmehta'
      }
    },
    {
      name: 'Anjali Desai',
      role: 'Content Strategist',
      image: '/src/assets/images/team/anjali.jpg',
      bio: 'Sanskrit scholar and technology enthusiast.',
      social: {
        linkedin: 'https://linkedin.com/in/anjalidesai',
        github: 'https://github.com/anjalidesai'
      }
    },
    {
      name: 'Vikram Singh',
      role: 'Outreach Coordinator',
      image: '/src/assets/images/team/vikram.jpg',
      bio: 'Connecting ancient wisdom with modern communities.',
      social: {
        linkedin: 'https://linkedin.com/in/vikramsingh',
        github: 'https://github.com/vikramsingh'
      }
    },
    {
      name: 'Meera Gupta',
      role: 'Community Manager',
      image: '/src/assets/images/team/meera.jpg',
      bio: 'Building bridges between technology and cultural heritage.',
      social: {
        linkedin: 'https://linkedin.com/in/meeragupta',
        github: 'https://github.com/meeragupta'
      }
    }
  ];

  return (
    <TeamContainer>
      <TeamHero
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Team</h1>
        <p>Meet the passionate minds behind CodeVeda</p>
      </TeamHero>
      
      <TeamGrid
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            as={motion.div}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)' 
            }}
            transition={{ duration: 0.3 }}
          >
            <MemberImage>
              <img src={member.image} alt={member.name} />
            </MemberImage>
            <MemberInfo>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.bio}</p>              <SocialLinks>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </SocialLinks>
            </MemberInfo>
          </TeamCard>
        ))}
      </TeamGrid>
      
      <TeamFooter>
        <h2>Want to Collaborate?</h2>
        <p>We're always looking for passionate individuals to join our mission of bridging ancient wisdom with modern technology.</p>
        <ContactButton 
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </ContactButton>
      </TeamFooter>
    </TeamContainer>
  );
};

const TeamContainer = styled.section`
  padding: 120px 0 80px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1240px) {
    padding: 120px 20px 80px;
  }
`;

const TeamHero = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
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
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const TeamCard = styled.div`
  background: rgba(30, 30, 30, 0.6);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 107, 53, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  padding: 20px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
    color: #FF6B35;
  }
  
  h4 {
    font-size: 1rem;
    color: #ccc;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  p {
    font-size: 0.95rem;
    color: #aaa;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    color: #aaa;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF6B35;
    }
  }
`;

const TeamFooter = styled.div`
  text-align: center;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #FF6B35;
  }
  
  p {
    font-size: 1.1rem;
    color: #ccc;
    max-width: 700px;
    margin: 0 auto 2rem;
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(to right, #FF6B35, #f39c12);
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 107, 53, 0.3);
  
  &:hover {
    box-shadow: 0 6px 15px rgba(255, 107, 53, 0.5);
  }
`;

export default Team;
