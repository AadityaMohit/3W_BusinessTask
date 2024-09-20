import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram, FaLinkedin, FaYoutube } from 'react-icons/fa';  
import { GiWallet } from 'react-icons/gi';  
import { RiMoneyDollarCircleLine } from 'react-icons/ri';  
import { FiUsers } from 'react-icons/fi';  
import { BsHouse, BsPlusCircle, BsGear } from 'react-icons/bs';  
import { BsFillStarFill } from 'react-icons/bs'; // Importing an icon for points
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="header">
        <div className="header-left">
        <BsHouse size={24} style={{ color: '#000' }} />
          {/* <span className="home-text">Home</span> */}
        </div>
        <div className="header-right">
          <div className="badge-icon">
            <BsFillStarFill size={24} style={{ color: '#FFD700' }} /> {/* Points icon */}
            <span className="badge-text">3982</span>
          </div>
          <div className="badge-icon">
            <GiWallet size={24} style={{ color: 'green' }} />
            <span className="badge-text">₹2875.00</span>
          </div>
          <div className="badge-icon">
            <RiMoneyDollarCircleLine size={24} style={{ color: 'blue' }} />
            <span className="badge-text">₹1000</span>
          </div>
          <div className="badge-icon">
            <FiUsers size={24} style={{ color: 'user' }} />
            <span className="badge-text">V</span>
          </div>
        </div>
      </div>

      <div className="referral-banner">
        Taskplanet. Get 10 Points on every referral.
      </div>

      <div className="wallet-section">
        <div className="wallet-card">
          <GiWallet size={32} style={{ marginBottom: '10px', color: 'green' }} />
          Wallet: ₹2875
        </div>
        <div className="wallet-card">
          <RiMoneyDollarCircleLine size={32} style={{ marginBottom: '10px', color: 'blue' }} />
          Earnings: ₹2875
        </div>
        <div className="wallet-card">
          <FiUsers size={32} style={{ marginBottom: '10px', color: 'orange' }} />
          Referrals: 2417
        </div>
      </div>

      <div className="leaderboard-section">
        <p>Weekly Leaderboard - Win ₹150</p>
      </div>

      <div className="social-media-task">
        <div className="social-media-icon">
          <FaInstagram size={36} style={{ color: '#E4405F' }} />
          <p>Instagram</p>
        </div>
        <div className="social-media-icon">
          <FaFacebook size={36} style={{ color: '#4267B2' }} />
          <p>Facebook</p>
        </div>
        <div className="social-media-icon">
          <FaTelegram size={36} style={{ color: '#0088cc' }} />
          <p>Telegram</p>
        </div>
        <div className="social-media-icon">
          <FaLinkedin size={36} style={{ color: '#0077B5' }} />
          <p>LinkedIn</p>
        </div>
        <div className="social-media-icon">
          <FaYoutube size={36} style={{ color: '#FF0000' }} />
          <p>YouTube</p>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="nav-item">
          <BsHouse size={24} style={{ color: '#000' }} />
          <p>Home</p>
        </div>
        <div className="nav-item">
          <BsPlusCircle size={24} style={{ color: '#000' }} />
          <p>Add</p>
        </div>
        <div className="nav-item">
          <BsGear size={24} style={{ color: '#000' }} />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default App;
