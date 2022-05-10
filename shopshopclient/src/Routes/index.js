import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../Views/About';
import ListingsView from '../Views/ListingsView';
import SingleListingView from '../Views/SingleListingView';
import Agents from '../Views/Agents';
import Contact from '../Views/Contact';
import AgentsListingsView from '../Views/Agent\'sListings';
import AgentLogin from '../Views/AgentLogin';
import CreateAgent from '../Views/CreateAgent';
import AgentProfile from '../Views/AgentProfile';
import AgentHome from '../Views/AgentHome';
import EditListingView from '../Views/EditListing';
import CreateListing from '../Views/CreateListing';

export default function Routing({agent}) {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/agents" element={<Agents />}/>
                <Route path="/listings" element={<ListingsView />} />
                <Route path="/listings/:id" element={<SingleListingView />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/agentLogin" element={<AgentLogin agent={agent}/>} />
                <Route path="/createAgent" element={<CreateAgent />} />
                {/* Agent Routes  Moving to AgentRoutes.js*/}
                <Route path="/agentHome/:key" element={<AgentHome />} />

                {/* <Route 
                path="/agentHome/:key" 
                element={
                    <ProtectedRoute agent={agent}>
                        <AgentHome />
                    </ProtectedRoute>
                }
                /> */}
                <Route path="/agentProfile/:key" element={<AgentProfile />} />
                <Route path="/agentsListings/:key" element={<AgentsListingsView />} />
                <Route path="/editListing" element={<EditListingView />} />
                <Route path="/postNewListing" element={<CreateListing />} />
            </Routes>
        </>
    )
}