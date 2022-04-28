import React from 'react'
import AgentProfileForm from '../Components/AgentProfileForm';
import { getAgentById } from "../Data/AgentsData";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function AgentProfile() {
  const [agent, setAgent] = useState({});
  const [editItem, setEditItem] = useState({});

  const { key } = useParams();

  useEffect(() => {
    getAgentById(key).then(setAgent).then(setEditItem);
  }, []);

  return (
      <div className='body-div agent-profile-body'>
          <div className='page-title'>Agent Profile</div>
          <hr />
          <div className='div-1'>
            <AgentProfileForm key={agent.id} editItem={editItem} />
            <div className='profile-img'>
              <img src={agent.imgURL} style={{ width: '10rem'}} /> {/*temp styling*/}
            </div>
          </div>
      </div>
  )
}
