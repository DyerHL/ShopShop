import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAgentById } from '../Data/AgentsData';

export default function AgentHome({agent}) {

  return (
    <div className='body body-div  agent-home-body'>
        <div className='img'></div>
        <div className="title">
          Agent Home
          <hr className="hr" />
        </div>
        <div className='div-body'>
            <div className='agent-link-div'>
            <Link className='link link-1' to="/agentsListings/:key">View Current Listings</Link>
            <Link className='link link-2' to="/postNewListing">Create New Listing</Link>
            <Link className='link link-3' to="/agentProfile/:key">Update Profile</Link>
            </div>
        </div>
    </div>
  )
}
