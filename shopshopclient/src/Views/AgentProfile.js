import React from 'react'
import AgentProfileForm from '../Components/AgentProfileForm';
import { getAgentByUid } from "../Data/AgentsData";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function AgentProfile() {
  const [agent, setAgent] = useState({});
  const [editItem, setEditItem] = useState({});
  const uid = sessionStorage.getItem("uid");

  const { key } = useParams();

  useEffect(() => {
    getAgentByUid(key).then(setAgent).then(setEditItem);
    console.log(agent);
    console.log(editItem);
  }, []);

  return (
      <div className='body-div agent-profile-body'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className='page-title'>Agent Profile</div>
          <hr />
          <div className='div-1'>
            <AgentProfileForm uid={key} editItem={editItem} />
            <div className='profile-img'>
              <img src={agent.imgURL} style={{ width: '10rem'}} /> {/*temp styling*/}
            </div>
          </div>
      </div>
  )
}
