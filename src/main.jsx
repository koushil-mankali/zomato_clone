import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
    </Routes>
  </BrowserRouter>
)
