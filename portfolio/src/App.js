import React from 'react';

import { Navbar } from "./components";
import { Header, AboutMe, Footer } from './containers'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <AboutMe/>
    </div>
  );
}

export default App;
