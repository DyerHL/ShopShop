 import React from "react";
 import nashSkyline from '../Assets/nashSkyline.jpg';
 

 export default function About() {
     return (
         <div className="body">
            <img src={nashSkyline} className="img"/>
            <div className="title">
                 SHOP SHOP
                 <hr className="hr"/>
            </div>
            <div className="div-body">
                We are a Nashville, TN based commerical real-estate firm focused on serving our local market. We help busines owners find the shop of their dreams.  
            </div>
         </div>
     )
 }