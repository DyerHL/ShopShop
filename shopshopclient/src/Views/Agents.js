import React from "react";
import AgentCard from "../Components/AgentCard";
import { getAllAgents } from "../Data/AgentsData";
import { useEffect, useState } from "react";

export default function Agents(){
    const [agents, setAgents] = useState([]);

   useEffect(() => {
       let isMounted = true;
       if (isMounted) {
           getAllAgents().then(setAgents);
       }
       return () => {
           isMounted = false;
       };
   }, []);

    return (
        <div>
            <div className="body">
                <div className="img-div">
                    <img src='https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/AgentViewImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQWdlbnRWaWV3SW1hZ2UuanBnIiwiaWF0IjoxNjUwOTM0MTE0LCJleHAiOjE5NjYyOTQxMTR9.7lXBcT14N_GqCMu7E6_k0fvelDSQt6XzDHxo7Wzx9Tw' className="img"  alt="nashville skyline"/>
                </div>
                <div className="title">
                    Our Agents
                    <hr className="hr" />
                </div>
                <div className="div-body">
                    <div>Our team of agents bring a level of knowledge and expereience that allows us to find creative solutions to your shop needs.</div>
                    <div className="cards">
                        {agents.map((card) => (
                            <AgentCard 
                                key={card.id} 
                                setAgents={setAgents} 
                                card={card} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}