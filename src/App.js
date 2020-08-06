import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel} from './components/Carousel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Basic Carousel, using react state
        </p>
      </header>
      <Carousel/>
    </div>
  );
}

export default App;
