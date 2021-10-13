import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ParticleBackground from "./component/ParticleBackground"


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParticleBackground />
  </React.StrictMode>,
  document.getElementById('root')
);

