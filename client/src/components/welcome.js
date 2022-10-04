import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../assets/hackzona-logo.jpeg'
 
export default function Welcome() {
 return (
   <div className="section">
    
    <p id="welcome-section" className="scroll-point"/>

     <div style={{
        "width" : 50 + '%',
        "float": "left"
     }}>
       <h1>Welcome to HackZona!</h1>
       <p>We are a hack-a-thon coming to Tucson, Arizona!</p>
     </div>
     
     <img style={
       {
        "width" : 45 + '%',
        "marginLeft" : 5,
        "float": "right"
        }} src={logo} alt="HackZona Logo"></img>
   </div>
 );
}