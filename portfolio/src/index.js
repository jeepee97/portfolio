import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css'
import { Home, Portfolio, AboutMe, Clients, ContactMe } from './pages'

const router = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to="/" replace />
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/portfolio',
        element: <Portfolio/>
    },
    {
        path: '/about',
        element: <AboutMe/>
    },
    {
        path: '/clients',
        element: <Clients/>
    },
    {
        path: '/contact',
        element: <ContactMe/>
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

