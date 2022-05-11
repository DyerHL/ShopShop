import React, { useEffect, useState } from 'react';
import { auth } from '../Data/APIKeys';
import Navbar from '../Components/Navbar';
import Routing from '../Routes';
import Footer from '../Components/Footer';
import { agentExisitsinDB } from '../Data/AuthAgents';

function Initialize() {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authed) => {
      if(authed) {
        const agentInfoObj = {
          Name: authed.name,
          uid: authed.uid,
          accessToken: authed.accessToken,
        };
        setAgent(agentInfoObj);
        console.warn("init", agentInfoObj);
        sessionStorage.setItem("token", authed.accessToken)
        // agentExisitsinDB(authed.accessToken);
      // } else if (agent == null) {
      } else if (agent || agent == null) {
        setAgent(false);
      }
    });
  }, []);
  
  return (
    <div>
        <Navbar agent={agent}/>
        <Routing agent={agent} />
        <Footer agent={agent}/>
    </div>
  );
}

export default Initialize;