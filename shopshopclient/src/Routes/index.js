import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Views/About';
import ListingsView from '../Views/ListingsView';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentLogin from '../Views/AgentLogin';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';
import Agents from '../Views/Agents';

export default function Routing() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/agents" element={<Agents />}/>
                <Route exact path="/agentsListingsView" element={<AgentsListingsView />} />
                <Route exact path="/agentLogin" element={<AgentLogin />} />
                <Route exact path="/agentHome" element={<AgentHome />} />
                <Route exact path="/agentProfile" element={<AgentProfile />} />
                <Route exact path="/listings" element={<ListingsView />} />
                <Route exact path="/editListingView" element={<EditListingView />} />
            </Routes>
        </>
    )
}