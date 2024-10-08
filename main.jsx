import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    <Toaster />
    </Router>
  </React.StrictMode>,
)
