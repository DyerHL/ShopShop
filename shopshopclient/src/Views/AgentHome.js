import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAgentById } from '../Data/AgentsData';

export default function AgentHome() {
  const [agent, setAgent] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getAgentById(key).then(setAgent);
  },[]);

  return (
    <div className='body-div  agent-home-body'>
        <div className='page-title'>Agent Home</div>
        <hr />
        <div className='div-1 agent-link-div'>
            <Link className='link link-1' to="/agentsListings/:key">View Current Listings</Link>
            <Link className='link link-2' to="/postNewListing">Create New Listing</Link>
            <Link className='link link-3' to="/agentProfile/:key">Update Profile</Link>
        </div>
    </div>
  )
}
