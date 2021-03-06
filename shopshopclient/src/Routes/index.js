import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
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

export default function Routing({ agent }) {
    return (
        <>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/agents" element={<Agents />}/>
                <Route path="/listings" element={<ListingsView />} />
                <Route path="/listings/:id" element={<SingleListingView />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/agentLogin" element={<AgentLogin />} />
                <Route path="/createAgent" element={<CreateAgent />} />
                <Route path="/agentHome/:key" element={agent ? <AgentHome  /> : <AgentLogin />} />
                <Route path="/agentProfile/:key" element={agent ? <AgentProfile  /> : <AgentLogin />} />
                <Route path="/agentsListings/:key" element={agent ? <AgentsListingsView  /> : <AgentLogin />} />
                <Route path="/editListing" element={agent ? <EditListingView  /> : <AgentLogin />} />
                <Route path="/postNewListing" element={agent ? <CreateListing  /> : <AgentLogin />} />
            </Routes>
        </>
    )
}

Routes.Proptype = {
    agent: PropTypes.shape(PropTypes.obj).isRequired
}