import React from 'react';
import { Button } from 'react-bootstrap';
import { IoLogoWhatsapp } from "react-icons/io";


const FloatingButton = () => {
  return (
    <Button
      variant="transparent"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000, 
      }}
   
    >
  <a href="https://wa.me/233502980350">
  <IoLogoWhatsapp className="floating-btn" style={{
    color:"green",
    fontSize:"70px"
   }}/>
  </a>
    </Button>
  );
};

export default FloatingButton;
