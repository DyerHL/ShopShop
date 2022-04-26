import React from 'react';
import { Link } from 'react-router-dom';

export default function AgentHome() {
  return (
    <div className='body-div  agent-home-body'>
        <div className='page-title'>Agent Home</div>
        <hr />
        <div className='div-1 agent-link-div'>
            <Link className='link link-1' to="/agentsListings">View Current Listings</Link>
            <Link className='link link-2' to="/postNewListing">Create New Listing</Link>
            <Link className='link link-3' to="/agentProfile">Update Profile</Link>
        </div>
    </div>
  )
}
