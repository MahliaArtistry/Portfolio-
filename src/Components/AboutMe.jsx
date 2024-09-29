/* 
  File Name: AboutMe.jsx
  Student's Name: Halima Omar
  StudentID: 300792884
  Date: 09/28/2024
*/

import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src="src/Images/Mahlia Omar.jpg" alt="Mahlia Omar" />
          </div>
          <div className="about-text">
            <p>
              Hello, my name is Mahlia Omar. I am a passionate developer with experience in various technologies. I love creating innovative solutions and working on exciting projects.
            </p>
            <p>
              I am a second-year Health Informatics student with a passion for leveraging technology to improve healthcare outcomes. Alongside my studies, I founded the Artistry Foundation, a nonprofit organization dedicated to empowering individuals through creativity. We believe that everyone is not just an artist; they embody what art truly represents. My goal is to bridge the gap between health and creativity, fostering a holistic approach to well-being.
            </p>
            <p>
              <a href="/Documents/Mahlia Omar.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Download My Resume</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;