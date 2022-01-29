import React from 'react';
import { Router } from '@reach/router';
import Home from '../../components/Home';
import Details from '../../components/Details';
import NotFound from '../../components/NotFound';
import Login from '../../components/Login';



export default function App() {
    return (
        <Router basepath='/app'>
            <Home path='/' />
            <Details path='/details' />
            <NotFound path='*' />
            <Login path='/login' />
        </Router>    
    );
}
