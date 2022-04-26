import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';

export default function AgentRoutes() {
  return (
    <>
        <Routes>
            <Route path="/agentHome" element={<AgentHome />} />
            <Route path="/agentProfile" element={<AgentProfile />} />
            <Route path="/agentsListingsView" element={<AgentsListingsView />} />
            <Route path="/editListingView" element={<EditListingView />} />
        </Routes>
    </>
  )
}
