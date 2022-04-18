 import React from "react";
 import nashSkyline from '../assets/nashSkyline';
 

 export default function About() {
     return (
         <div className="about">
             <div>
                 <img src={nashSkyline} className="about-skyline"/>
             </div>
             <div className="about-name">
                 SHOP SHOP
                 <hr className="about-hr"/>
             </div>
             <div className="about-details">
                We are a Nashville, TN based commerical real-estate firm focused on serving our local market. We help busines owners find the shop of their dreams.  
             </div>
         </div>
     )
 }