import React from 'react';
import ReactDOM from 'react-dom';
import HelloTarun from './components/HelloTarun';
import './index.css';
import AaronsComponent from './components/AaronsComponent';
import HelloPreet from './components/HelloPreet';

ReactDOM.render(
  <React.StrictMode>
    <AaronsComponent />
    <HelloTarun />
    <HelloPreet />
  </React.StrictMode>,
  document.getElementById('root')
);
