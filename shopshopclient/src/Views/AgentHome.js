import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAgentById } from '../Data/AgentsData';

export default function AgentHome({ agent }) {

 const uid = sessionStorage.getItem("uid")
 

  return (
    <div className='body body-div  agent-home-body'>
        <div className='img'></div>
        <div className="title">
          <h6>Welcome {agent.Name}</h6>
          <br />
          Agent Home
          <hr className="hr" />
        </div>
        <div className='div-body'>
            <div className='agent-link-div'>
            <Link className='link link-1' to={`/agentsListings/${uid}`}>View Current Listings</Link>
            <Link className='link link-2' to="/postNewListing">Create New Listing</Link>
            <Link className='link link-3' to={`/agentProfile/${uid}`}>Update Profile</Link>
            </div>
        </div>
    </div>
  )
}
