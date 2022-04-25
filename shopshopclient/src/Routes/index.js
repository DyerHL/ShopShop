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
<<<<<<< HEAD
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
=======
                <Route exact path="/" element={<About />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/agents" element={<Agents />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/agentsListingsView" element={<AgentsListingsView />} />
                <Route exact path="/agentLogin" element={<AgentLogin />} />
                <Route exact path="/agentHome" element={<AgentHome />} />
                <Route exact path="/agentProfile" element={<AgentProfile />} />
                <Route exact path="/listings" element={<ListingsView />} />
                <Route exact path="/editListingView" element={<EditListingView />} />
>>>>>>> master
            </Routes>
        </>
    )
}