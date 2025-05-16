import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sponsorTiers = [
    {
      tier: "Brahma Tier",
      color: "#FFC738",
      description: "Our principal sponsors who make the entire CodeVeda hackathon possible.",      sponsors: [
        {
          name: "TechVeda Solutions",
          logo: "../assets/images/sponsors/techveda.svg",
          description: "Leading AI and machine learning solutions for modern businesses.",
          website: "https://techveda-example.com"
        },
        {
          name: "Sanskrit AI",
          logo: "../assets/images/sponsors/sanskritai.svg",
          description: "Pioneering language technology based on ancient Sanskrit principles.",
          website: "https://sanskritai-example.com"
        }
      ]
    },    {
      tier: "Vishnu Tier",
      color: "#E0E0E0",
      description: "Major supporters who help sustain our innovation ecosystem.",
      sponsors: [        {
          name: "Dharma Tech",
          logo: "../assets/images/sponsors/dharma.svg",
          description: "Ethical technology solutions for conscious businesses.",
          website: "https://dharmatech-example.com"
        },
        {
          name: "Chakra Labs",
          logo: "../assets/images/sponsors/chakra.svg",
          description: "Research-focused development of balanced technologies.",
          website: "https://chakralabs-example.com"
        },
        {
          name: "Om Systems",
          logo: "../assets/images/sponsors/omsystems.svg",
          description: "Universal technology solutions with Vedic principles.",
          website: "https://omsystems-example.com"
        }
      ]
    },    {
      tier: "Shiva Tier",
      color: "#CD7F32",
      description: "Valued supporters providing essential resources and expertise.",
      sponsors: [        {
          name: "Mantra Cloud",
          logo: "../assets/images/sponsors/mantra.svg",
          description: "Cloud solutions with meaning and purpose.",
          website: "https://mantracloud-example.com"
        },
        {
          name: "Ashram Technologies",
          logo: "../assets/images/sponsors/ashram.svg",
          description: "Sustainable and mindful technology innovation.",
          website: "https://ashramtech-example.com"
        },
        {
          name: "Kali Security",
          logo: "../assets/images/sponsors/kali.svg",
          description: "Protection through ancient wisdom and modern techniques.",
          website: "https://kalisecurity-example.com"
        },
        {
          name: "Ganesha Analytics",
          logo: "../assets/images/sponsors/ganesha.svg",
          description: "Removing obstacles to data insights and intelligence.",
          website: "https://ganeshaanalytics-example.com"
        }
      ]    }
  ];

  return (
    <StyledSponsors>
      <motion.div
        className="page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sacred-geometry-bg"></div>
        
        <header className="page-header">
          <h1 className="vedic-title">Our Esteemed Sponsors</h1>
          <div className="sanskrit-divider">॥ संयोजकाः ॥</div>
          <p className="lead-text">
            We extend our heartfelt gratitude to the visionary organizations that make CodeVeda possible.
            Their support nurtures the sacred convergence of ancient wisdom and modern technology.
          </p>
        </header>

        <section className="sponsor-tiers">
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              className="sponsor-tier"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="tier-header" style={{ borderColor: tier.color }}>
                <h2>{tier.tier}</h2>
                <p>{tier.description}</p>
              </div>
              
              <div className="sponsors-grid">
                {tier.sponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.name}
                    className="sponsor-card"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="sponsor-logo">
                      <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                    </div>
                    <h3>{sponsor.name}</h3>
                    <p>{sponsor.description}</p>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                      Visit Website
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        <section className="become-sponsor">
          <div className="sacred-geometry"></div>
          <div className="content">
            <h2>Become a Sponsor</h2>
            <p className="sanskrit">सहयोगेन उत्तमम् (Excellence through collaboration)</p>
            <p>
              Join the prestigious community of organizations supporting the fusion of ancient wisdom and innovative technology.
              As a sponsor, you'll gain visibility among top tech talent and position your brand at the forefront of mindful innovation.
            </p>
            <a href="mailto:sponsors@codeveda.org" className="cta-button">Contact Us</a>
          </div>
        </section>
      </motion.div>
    </StyledSponsors>
  );
};

const StyledSponsors = styled.div`
  padding: 2rem 0 5rem;
  position: relative;
  overflow: hidden;

  .page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }
  .sacred-geometry-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/src/assets/images/mandala-pattern.svg');
    background-size: cover;
    opacity: 0.03;
    z-index: -1;
  }
  .page-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 4rem 1rem;
    background-image: url('/src/assets/images/sponsors/sponsors-hero.svg');
    background-size: cover;
    background-position: center;
    color: white;
    position: relative;
    
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 0 2px 15px rgba(0,0,0,0.3);
    }
    
    .sanskrit-divider {
      font-family: var(--font-sanskrit);
      font-size: 1.5rem;
      margin: 1rem 0;
      color: var(--primary-color);
    }
    
    .lead-text {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }

  .sponsor-tier {
    margin-bottom: 4rem;
    
    .tier-header {
      border-left: 5px solid;
      padding-left: 1.5rem;
      margin-bottom: 2rem;
      
      h2 {
        font-family: var(--font-display);
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }
      
      p {
        opacity: 0.9;
      }
    }
  }

  .sponsors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }

  .sponsor-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: var(--primary-color);
    }
    
    .sponsor-logo {
      height: 120px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
      }
    }
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--primary-color);
    }
    
    p {
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    
    .sponsor-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      font-size: 0.9rem;
      transition: all 0.2s;
      
      &:hover {
        background: var(--primary-color);
        color: var(--bg-dark);
      }
    }
  }    .become-sponsor {
      position: relative;
      margin-top: 4rem;
      padding: 3rem;
      border-radius: 12px;
      background-image: url('../assets/images/sponsors/sponsor-cta-bg.svg');
      background-size: cover;
      background-position: center;
      backdrop-filter: blur(10px);
      overflow: hidden;
      
      .sacred-geometry {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 40%;
        background-image: url('../assets/images/mandala-pattern.svg');
        background-size: cover;
        opacity: 0.15;
        z-index: 0;
      }
    
    .content {
      position: relative;
      z-index: 1;
      max-width: 600px;
      
      h2 {
        font-family: var(--font-display);
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
      }
      
      .sanskrit {
        font-family: var(--font-sanskrit);
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
      }
      
      p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      
      .cta-button {
        display: inline-block;
        padding: 0.8rem 2rem;
        background: var(--primary-color);
        color: var(--bg-dark);
        font-weight: 600;
        border-radius: 4px;
        transition: all 0.3s;
        
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .sponsors-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
    .become-sponsor {
      padding: 2rem;
      
      .sacred-geometry {
        width: 100%;
        height: 50%;
        top: auto;
        bottom: 0;
      }
    }
  }

  @media (max-width: 480px) {
    .page-header h1 {
      font-size: 2.2rem;
    }
    
    .sponsors-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Sponsors;