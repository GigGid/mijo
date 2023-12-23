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
        zIndex: 1000, // Adjust the z-index based on your layout
        // borderRadius: '50%',
        // boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        // background:"green"
      }}
   
    >
  <a href="https://wa.me/233502980350">
  <IoLogoWhatsapp style={{
    color:"green",
    fontSize:"70px"
   }}/>
  </a>
    </Button>
  );
};

export default FloatingButton;
