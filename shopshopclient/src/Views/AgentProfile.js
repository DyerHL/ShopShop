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
      <div className='body agent-profile-body'>
      <div className='img'></div>
      <div className="title">
          Agent Profile
          <hr className="hr" />
      </div>
          <div className='div-body profile-body'>
            <AgentProfileForm key={agent.id} editItem={editItem} />
            <div className='profile-img'>
              {/* <img src={agent.imgURL} style={{ width: '10rem'}} /> temp styling */}
              <img src="https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/Blank Profile Image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQmxhbmsgUHJvZmlsZSBJbWFnZS5wbmciLCJpYXQiOjE2NTI1NDAxNTIsImV4cCI6MTk2NzkwMDE1Mn0.4zraJyf51Uc5y0wEalkBqI5tRhkCoonrBdpNPx2SL9c" alt="profile" />
            </div>
          </div>
      </div>
  )
}
