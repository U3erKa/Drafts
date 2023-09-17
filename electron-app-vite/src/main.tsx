import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// We can use variables exposed in `preload.ts` directly or as key of `window` object
declare const versions: Window['versions'];

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*');

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});

console.log(
  `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`,
);
// console.log(window.versions);
window.ping().then(console.log);
