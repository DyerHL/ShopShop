import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Views/About';
import ListingsView from '../Views/ListingsView';
import Agents from '../Views/Agents';
import Contact from '../Views/Contact';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentLogin from '../Views/AgentLogin';
import CreateAgent from '../Views/CreateAgent';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';
import CreateListing from '../Views/CreateListing';

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
                <Route path="/createAgent" element={<CreateAgent />} />
                {/* Agent Routes  Moving to AgentRoutes.js*/}
                <Route path="/agentHome/:key" element={<AgentHome />} />
                <Route path="/agentProfile/:key" element={<AgentProfile />} />
                <Route path="/agentsListings" element={<AgentsListingsView />} />
                <Route path="/editListing" element={<EditListingView />} />
                <Route path="/postNewListing" element={<CreateListing />} />
            </Routes>
        </>
    )
}