import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';
import CreateListing from '../Views/CreateListing';

export default function AgentRoutes() {
  return (
    <>
        <Routes>
            <Route path="/agentHome" element={<AgentHome />} />
            <Route path="/agentProfile" element={<AgentProfile />} />
            <Route path="/agentsListings" element={<AgentsListingsView />} />
            <Route path="/editListing" element={<EditListingView />} />
            <Route path="/postNewListing" element={<CreateListing />} />
        </Routes>
    </>
  )
}
