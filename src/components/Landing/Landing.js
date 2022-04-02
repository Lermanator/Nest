import React from 'react';
import logo from '../logo.png';
import './Landing.css';
import { Image, Row } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="Landing">
            <Row className = "rowStyle Top">
              <div className="imgdiv">
                <Image 
                  src='../logo.png'
                  rounded
                  style={{
                    flex:1,
                    width:'10rem',
                    height:'10rem',
                    resizeMode: 'contain'
                  }}                  
                  className='lodge'
                  alt="Club Logo"
                />
              </div>
            </Row>
            <Row className = "rowStyle">
              <h2>Welcome To BCA's Interact Club!</h2>
            </Row>
    </div>
  );
}