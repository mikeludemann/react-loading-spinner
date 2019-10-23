import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './components/loading-spinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <LoadingSpinner 
          size="50" 
          id="main--spinner" 
          class="spinner" 
          color="#0c0" 
          bgcolor="#ccc" 
          speed={1}
        >
         </LoadingSpinner>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
