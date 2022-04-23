import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Views/About';
import ListingsView from '../Views/ListingsView';
import Agents from '../Views/Agents';
import Contact from '../Views/Contact';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentLogin from '../Views/AgentLogin';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';

export default function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/agents" element={<Agents />}/>
                <Route path="/listings" element={<ListingsView />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/agentLogin" element={<AgentLogin />} />
                {/* Agent Routes  Moving to AgentRoutes.js*/}
                <Route path="/agentHome" element={<AgentHome />} />
                <Route path="/agentProfile" element={<AgentProfile />} />
                <Route path="/agentsListingsView" element={<AgentsListingsView />} />
                <Route path="/editListingView" element={<EditListingView />} />
            </Routes>
        </>
    )
}