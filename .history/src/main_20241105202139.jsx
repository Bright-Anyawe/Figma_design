import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import "./Styles/index.css";
import "./Styles/App.css";
import "sr/Styles/Responsive.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)