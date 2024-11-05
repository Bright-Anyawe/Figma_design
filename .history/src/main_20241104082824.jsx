import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Styles/index.css";
import "./Styles/App.css";
import "./Responsive.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
