 import React from "react";
import AgentCard from "../Components/AgentCard";
//  import nashSkyline from '../Assets/nashSkyline.jpg';
 

 export default function About() {
     return (
         <div className="body">
            <img src='https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/AboutViewImageCr.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQWJvdXRWaWV3SW1hZ2VDci5wbmciLCJpYXQiOjE2NTEyNjQwNzIsImV4cCI6MTk2NjYyNDA3Mn0.0Ix7kSdFHBmgtjQqoQ4ZZfdIcLhDMhRwxssOLvDqxqc' alt="nashville skyline" className="img"/>
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