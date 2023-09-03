import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Yüklediğimiz Router componentini burada import ediyoruz
import { BrowserRouter } from 'react-router-dom'


// Routrer'a uygulamamızın heryerinden erişmek için, BrowserRouter ile sarmalıyoruz.
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
