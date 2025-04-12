import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for DOM to be ready
const prepare = async () => {
  // Add any async preparation here if needed
  return new Promise(resolve => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
};

// Initialize the app
const init = async () => {
  await prepare();
  const root = document.getElementById('root');
  
  if (!root) {
    console.error('Root element not found');
    return;
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

init().catch(console.error);
