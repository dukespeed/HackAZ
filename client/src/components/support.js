import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../assets/HackArizona_logo-400x400.png'
 
export default function Support() {
 return (
   <div className="section">
    
    <p id="support-section" className="scroll-point"/>

     <div style={{
        "width" : 50 + '%',
        "float": "right"
     }}>
     <h1>Support</h1>
     <p>We are a hack-a-thon coming to Tucson, Arizona!</p>
     </div>
     
     <img src={logo} alt="HackAZ Logo" style={{
        "width" : 45 + '%',
        "float": "left"
        }} 
     ></img>
   </div>
 );
}