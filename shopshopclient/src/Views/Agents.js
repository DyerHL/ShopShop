import React from "react";
import AgentCard from "../Components/AgentCard";

export default function Agents(){
    //const [agents, setAgents] = useState({});

   /*
   useEffect(() => {
       let isMounted = true;
       if (isMounted) {
           getAgents().then(setAgents);
       }
       return () => {
           isMounted = false;
       };
   }, []);
    */ 

    return (
        <div>
            <div className="body">
                <img src='https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/AboutViewImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQWJvdXRWaWV3SW1hZ2UuanBnIiwiaWF0IjoxNjUwNDk3OTM2LCJleHAiOjE5NjU4NTc5MzZ9.oMoy8OksJVrgCuMSSLRvCCqORS2kzh81quAZMxFSEmA' className="img" />
                <div className="title">
                    Our Agents
                    <hr className="hr" />
                </div>
                <div className="div-body">
                    <div>Our team of agents bring a level of knowledge and expereience that allows us to find creative solutions to your shop needs.</div>
                    {/*
                    <div className="cards">
                        {agents.map((card) => (
                            <AgentsCard setAgents={setAgents} card={card} />
                        ))}
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}