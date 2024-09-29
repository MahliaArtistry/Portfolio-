/* 
  File Name: NavBar.jsx
  Student's Name: Halima Omar
  StudentID: 300792884
  Date: 09/28/2024
*/
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="src\Images\logo.png" alt="Logo" className="logo-image" />
        </div>
        <div className="links-container">
          <NavLink to="/" className="nav-link" activeClassName="active-link" exact>Home</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active-link">Projects</NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active-link">Services</NavLink>
          <button onClick={toggleModal} className="nav-link contact-button">Contact</button>
        </div>
      </nav>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>&times;</span>
            <form className="contact-form">
              <input type="text" name="firstName" placeholder="First Name" required className="form-input" />
              <input type="text" name="lastName" placeholder="Last Name" required className="form-input" />
              <input type="email" name="email" placeholder="Email" required className="form-input" />
              <textarea name="message" placeholder="Message" required className="form-textarea"></textarea>
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;