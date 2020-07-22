import React from 'react'
import { Router } from '@reach/router'
import Home from './components/home'
import Dashboard from './components/dashboard/Dashboard'

const Route = () => {
    return (
        <Router>
            <Home path="/" />
            <Dashboard path="/dashboard" />
        </Router>
    )
}

export default Route