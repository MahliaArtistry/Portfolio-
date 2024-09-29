/* 
  File Name: Portfolio 
  Student's Name: Halima Omar
  StudentID: 300792884
  Date: 09/28/2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-overlay">
      <div className="content-wrapper">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome 
      </motion.h1>
      <motion.p 
        className="mission-statement"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        As a health informatics student and founder of the Artistry Foundation, my mission is to harness the power of technology and creativity to enhance health and well-being. 
        I believe that effective health informatics can improve patient care and empower individuals to take charge of their health.
        Through innovative programs, I aim to bridge the gap between data and creativity, fostering a holistic approach that inspires communities to express themselves and thrive.
      </motion.p>
      <motion.div 
        className="link-container"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }}
      >
        <Link to="/about" className="nav-link arrow-link">
          Learn More About Me
        </Link>
      </motion.div>
    </div>
    </div></div>
  );
};

export default Home;