import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
    <div className="mandala-decoration"></div>
  <div className="footer-content">
        <div className="footer-logo">
          <h2>Code<span>Veda</span></h2>
          <p>Where Ancient Wisdom Meets Modern Technology</p>
          <div className="sanskrit-motto">
            प्राचीनज्ञानं नवीनतन्त्रम्
            <span className="motto-translation">"Ancient Wisdom, Modern Technology"</span>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3>Navigation</h3>
            <Link to="/">Home</Link>
            <Link to="/why-code-veda">Why CodeVeda</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/events">Events</Link>
            <Link to="/prizes">Prizes</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/team">Team</Link>
          </div>
          
          <div className="link-group">
            <h3>Resources</h3>
            <a href="#">Code of Conduct</a>
            <a href="#">FAQ</a>
            <a href="#">Guidelines</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          
          <div className="link-group">
            <h3>Contact</h3>
            <a href="mailto:info@codeveda.com">info@codeveda.com</a>
            <p>+91 98765 43210</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="Email"><FaEnvelope /></a>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} CodeVeda. All rights reserved.
        </p>
        
        <div className="attribution">
          <p>Made with ❤️ by the CodeVeda Team</p>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #f3e9c6; /* Beige background */
  color: #3b2e1e; /* Dark brown text */
  padding: 3rem 2rem 1rem;
  border-top: 1px solid rgba(59, 46, 30, 0.3); /* Dark brown with opacity */
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  
  .footer-logo {
    flex: 1;
    min-width: 250px;      h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      
      span {
        color: #3b2e1e; /* Dark brown */
      }
    }
    
    p {
      color: rgba(59, 46, 30, 0.8); /* Dark brown with opacity */
      max-width: 300px;
    }
  }
  
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    flex: 2;
    justify-content: space-around;
    
    .link-group {
      display: flex;
      flex-direction: column;
      min-width: 150px;        h3 {
        color: #3b2e1e; /* Dark brown */
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        font-weight: bold;
      }
        a, p {
        color: rgba(59, 46, 30, 0.8); /* Dark brown with opacity */
        margin-bottom: 0.8rem;
        transition: color 0.2s ease;
        
        &:hover {
          color: #5a4631; /* Lighter brown for hover */
        }
      }
    }
  }
  
  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;    border-top: 1px solid rgba(59, 46, 30, 0.1); /* Dark brown with opacity */
    
    .social-icons {
      display: flex;
      gap: 1.5rem;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      
      a {
        color: rgba(59, 46, 30, 0.8); /* Dark brown with opacity */
        transition: color 0.2s ease;
          &:hover {
          color: #5a4631; /* Lighter brown for hover */
        }
      }
    }
      .copyright {
      color: rgba(59, 46, 30, 0.6); /* Dark brown with opacity */
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .attribution {
      color: rgba(59, 46, 30, 0.6); /* Dark brown with opacity */
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
    
    .footer-links {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default Footer;
