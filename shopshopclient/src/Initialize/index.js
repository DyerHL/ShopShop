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
          Name: authed.Name,
          uid: authed.uid,
          accessToken: authed.accessToken,
        };
        setAgent(agentInfoObj);
        sessionStorage.setItem("token", authed.accessToken)
        agentExisitsinDB(authed.accessToken);
        console.warn("Index Auth", authed.accessToken);
      } else if (agent || agent == null) {
        setAgent(false);
      }
    });
  }, []);
  
  return (
    <div>
        <Navbar />
        <Routing agent={agent} />
        <Footer />
    </div>
  );
}

export default Initialize;