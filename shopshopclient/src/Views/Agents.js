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
        <div className="body">
            <img src='https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/AgentViewImageCr.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQWdlbnRWaWV3SW1hZ2VDci5wbmciLCJpYXQiOjE2NTEyNjQxMTUsImV4cCI6MTk2NjYyNDExNX0.bu9BWml8TofCOT3Awbyv3-v-I28dpqSpW4wInEVZARY' className="img"  alt="nashville skyline"/>
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
    )
}