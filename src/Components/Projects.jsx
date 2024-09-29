import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import artistryImg from '../Images/artistry.png';
import empowerTechWomenImg from '../Images/empowertechwomen.png';
import yadImg from '../Images/y.a.d.png';


const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 'Artistry Foundation',
      title: 'Artistry Foundation',
      subtitle: 'I had the privilege of developing the website for the Artistry Foundation, a nonprofit organization dedicated to promoting and supporting artistic expression in the community.',
      description: 'The site effectively showcases the foundation’s mission to empower artists and provide resources for creative development. The design emphasizes accessibility and user-friendliness, featuring a clean layout that highlights upcoming events and workshops. Overall, the Artistry Foundation website serves as a vibrant platform for fostering creativity and connecting artists with opportunities. I’m proud to contribute to such an important cause and help amplify the foundation’s impact through a dynamic online presence.',
      imgSrc: artistryImg
    },
    {
      id: 'Empower Tech Women',
      title: 'Empower Tech Women',
      subtitle: 'Empowering women in technology through education and community support.',
      description: 'The Empower Tech Women project focuses on providing resources and support for women in technology. The website features a clean and modern design, with sections dedicated to upcoming events, resources, and success stories. The goal is to create a supportive community where women can connect, learn, and grow in their tech careers.',
      imgSrc: empowerTechWomenImg
    },
    {
      id: 'Y.A.D',
      title: 'Y.A.D',
      subtitle: 'Younge and Determined',
      description: 'The Y.A.D project aims to nurture young artistic talent by providing a platform for youth to showcase their work and connect with mentors. The website features a vibrant design with galleries, event listings, and resources for young artists.',
      imgSrc: yadImg
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {items.map(item => (
          <motion.div 
            key={item.id} 
            layoutId={item.id} 
            className="project-box"
            onClick={() => setSelectedId(item.id)}
          >
            <img src={item.imgSrc} alt={item.title} className="project-image" />
            <div className="project-description">
              <motion.h2>{item.title}</motion.h2>
              <motion.p>{item.subtitle}</motion.p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            layoutId={selectedId} 
            className="project-details"
            onClick={() => setSelectedId(null)}
          >
            <div className="project-details-content">
              <motion.button 
                className="close-button" 
                onClick={() => setSelectedId(null)}
              >
                ×
              </motion.button>
              <motion.img 
                src={items.find(item => item.id === selectedId).imgSrc} 
                alt={items.find(item => item.id === selectedId).title} 
                className="project-details-image"
              />
              <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
              <motion.p>{items.find(item => item.id === selectedId).subtitle}</motion.p>
              <motion.p>{items.find(item => item.id === selectedId).description}</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;