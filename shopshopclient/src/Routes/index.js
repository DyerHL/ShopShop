import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Views/About';
import ListingsView from '../Views/ListingsView';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentLogin from '../Views/AgentLogin';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';

export default function Routing() {
    return (
        <>
            <Routes>
                <Route excact path="/" element={<About />} />
                <Route excact path="/about" element={<About />} />
                <Route excact path="/agentsListingsView" element={<AgentsListingsView />} />
                <Route excact path="/agentLogin" element={<AgentLogin />} />
                <Route excact path="agentHome" element={<AgentHome />} />
                <Route excact path="/agentProfile" element={<AgentProfile />} />
                <Route excact path="/listingsView" element={<ListingsView />} />
                <Route excact path="/editListingView" element={<EditListingView />} />
            </Routes>
        </>
    )
}