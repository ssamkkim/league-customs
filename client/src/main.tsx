import React from 'react';
import ReactDOM from 'react-dom/client';

import RouteSwitch from './routes/RouteSwitch';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
