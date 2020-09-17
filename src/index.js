import React from 'react';
import ReactDOM from 'react-dom';
import HelloTarun from './components/HelloTarun';
import './index.css';
import AaronsComponent from './components/AaronsComponent'

ReactDOM.render(
  <React.StrictMode>
    <AaronsComponent />
    <HelloTarun />
  </React.StrictMode>,
  document.getElementById('root')
);
