import React from 'react';
import ReactDOM from 'react-dom';
import RandomPicker from './RandomPicker';
import App from './App';

import './App.scss';

ReactDOM.render(
  <div className='App'>
    <App />
    {/* <RandomPicker items={namesList} /> */}
  </div>,
  document.getElementById('random-picker')
);
