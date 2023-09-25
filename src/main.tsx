import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './containers/App.tsx';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
