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
          Name: authed.displayName,
          uid: authed.uid,
          accessToken: authed.accessToken,
        };
        sessionStorage.setItem("token", authed.accessToken);
        sessionStorage.setItem("uid", authed.uid);
        agentExisitsinDB(authed.accessToken).then(setAgent(agentInfoObj));
      } else {
        setAgent(false);
      }
    });
  }, []);
  
  return (
    <div>
        <Navbar />
        <Routing agent={agent} />
        <Footer agent={agent}/>
    </div>
  );
}

export default Initialize;