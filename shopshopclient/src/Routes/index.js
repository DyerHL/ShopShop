import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../Views/About';

export default function Routing() {
    return (
        <>
            <Routes>
                <Route excact path="/" component={() => <About />} />
                <Route excact path="/About" component={() => <About />} />
            </Routes>
        </>
    )
}