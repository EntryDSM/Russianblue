import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.min.js').then(() => {
    console.log('Service Worker Registered');
  });
}

ReactDom.render(<App />, document.getElementById('root'));
