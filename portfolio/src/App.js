import React from 'react';

import { Navbar, Intro } from "./components";
import { Header, Footer } from './containers'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
    </div>
  );
}

export default App;
