import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Hero from './components/home/hero/Hero'
import Mobile from './components/mobile/Mobile'
import RegisterRestaurant from './components/partnerWithUs/RegisterRestaurant'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<App />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/partner-with-us" element={<RegisterRestaurant />} />
    </Routes>
  </BrowserRouter>
)
