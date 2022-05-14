import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Hero from './components/home/hero/Hero'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<App />} />
      <Route path="/mobile" element={<Hero />} />
    </Routes>
  </BrowserRouter>
)
