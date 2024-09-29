/* 
  File Name: Services.jsx
  Student's Name: Halima Omar
  StudentID: 300792884
  Date: 09/28/2024
*/
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 'service1',
      title: 'UI/UX Design',
      subtitle: 'Offering a wide range of machine learning services including model development, data analysis, and more.',
      description: 'Our UI/UX Design services focus on creating intuitive and engaging user experiences. We blend aesthetics with functionality to ensure your applications are not only visually appealing but also user-friendly. Our team leverages machine learning to personalize user interactions, optimizing designs based on user behavior and preferences.',
      imgSrc: 'https://th.bing.com/th/id/R.6a02b21e9304d963875b356728f449ef?rik=B6viX0M6baRBMQ&riu=http%3a%2f%2frefy.com.au%2fwp-content%2fuploads%2f2020%2f04%2frefy-illustration-04.png&ehk=HiMhIb96f%2fuKOMpDGOdO3FrwX9LSEx%2bSp5tR2VLkHQI%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 'service2',
      title: 'App Development',
      subtitle: 'Creating responsive and modern applications using the latest technologies and best practices.',
      description: 'We specialize in developing high-quality applications that are responsive, scalable, and built with the latest technologies. Our app development process emphasizes user-centric design and performance, ensuring that your application meets the needs of your audience while adhering to industry best practices. From concept to deployment, we provide a seamless development experience.',
      imgSrc: 'https://cdni.iconscout.com/illustration/premium/thumb/microsite-development-7848570-6296114.png'
    },
    {
      id: 'service3',
      title: 'Website Analytics',
      subtitle: 'Providing comprehensive website analytics services to help you understand and improve your online presence.',
      description: 'Our Website Analytics services empower you to make informed decisions about your digital strategy. We offer in-depth analysis of user behavior, traffic sources, and key performance indicators to help you understand how visitors interact with your site. With our actionable insights, you can enhance user engagement, optimize conversion rates, and ultimately grow your online presence.',
      imgSrc: 'https://th.bing.com/th/id/OIP.T2QrZqSU9ADffSSUcIfeIQHaGo?w=1536&h=1374&rs=1&pid=ImgDetMain'
    }, {
      id: 'service4',
      title: 'Website Hosting Services',
      subtitle: 'Reliable and secure website hosting solutions to keep your site running smoothly.',
      description: 'Our Website Hosting Services provide reliable and secure hosting solutions to ensure your website is always up and running. We offer various hosting plans tailored to your needs, including shared hosting, VPS hosting, and dedicated servers. Our services include 24/7 support, regular backups, and robust security measures to protect your site from threats. Trust us to keep your online presence stable and secure.',
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/006/369/469/large_2x/services-of-cloud-flat-illustration-of-cloud-marketing-vector.jpg'
    }
  ];

  return (
    <div className="services-container">
       <h1 className="section-title">Services</h1>
      <div className="services-grid">
        {items.map(item => (
          <motion.div 
            key={item.id} 
            layoutId={item.id} 
            className="service-item"
            onClick={() => setSelectedId(item.id)}
          >
            <img src={item.imgSrc} alt={item.title} className="service-image" />
            <div className="service-description">
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
      className="service-details"
      onClick={() => setSelectedId(null)}
    >
      <div className="service-details-content">
        <motion.button 
          className="close-button" 
          onClick={() => setSelectedId(null)}
        >
          ×
        </motion.button>
        {(() => {
          const selectedItem = items.find(item => item.id === selectedId);
          return (
            <>
              <motion.img 
                src={selectedItem.imgSrc} 
                alt={selectedItem.title} 
                className="service-details-image"
              />
              <motion.h2>{selectedItem.title}</motion.h2>
              <motion.p>{selectedItem.subtitle}</motion.p>
              <motion.p>{selectedItem.description}</motion.p>
            </>
          );
        })()}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Services;