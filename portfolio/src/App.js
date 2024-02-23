import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Navbar } from "./components";
import { Header, AboutMe, Footer } from './containers'; 
import { Home } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
      </div>
      <Home/>
    </div>
  );
}

export default App;
