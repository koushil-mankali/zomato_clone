import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import ShowCase from './pages/Orderings/ShowCase'
import User from './pages/User/User'
import ErrorPage from './pages/ErrorPage/ErrorPage'
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from './App'
import './index.css'

import Testpage from './pages/testpage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/test-page" element={<Testpage />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
