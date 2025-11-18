import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log("main.jsx is loading...");

const rootElement = document.getElementById('root');
console.log("Root element:", rootElement);

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    console.log("Root created successfully");
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering app:", error);
  }
} else {
  console.error("Root element not found!");
}
