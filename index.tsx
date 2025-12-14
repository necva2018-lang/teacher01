import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Application failed to mount:", error);
  rootElement.innerHTML = `<div style="padding: 20px; color: red;">
    <h2>Application Error</h2>
    <pre>${error instanceof Error ? error.message : String(error)}</pre>
  </div>`;
}