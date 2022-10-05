import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div >
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >

       <NavLink className="navbar-brand" to="/">
       HackAZ
       </NavLink>
       
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
             <a className="nav-link" href="/#welcome-section" >
               Welcome
             </a>
           </li>
           <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
             <a className="nav-link" href="/#essential-section">
               Essentials
             </a>
           </li>
           <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
             <a className="nav-link" href="/#support-section">
               Support
             </a>
           </li>
           <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
             <a className="nav-link" href="/forum">
               Forum
             </a>
           </li>
         </ul>
       </div>
       
     </nav>
   </div>
 );
}