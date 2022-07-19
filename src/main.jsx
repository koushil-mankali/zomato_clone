import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import ShowCase from './pages/ShowCase/ShowCase'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import User from './pages/User/User'
import GetTheApp from './pages/GetTheApp/GetTheApp'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SkipedPage from './pages/SkipedPage/SkipedPage'
import UserSettingsPage from './pages/UserSettingsPage/UserSettingsPage'

import TestPage from './pages/TestPage/TestPage'
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/user/:userId/notifications" element={<SkipedPage />} />
      <Route path="/user/:userId/network" element={<SkipedPage />} />
      <Route path="/user/:userId/find-friends" element={<SkipedPage />} />
      <Route path="/user/:userId/settings" element={<UserSettingsPage />}/>
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/:city/:hotel/:page" element={<RestaurantPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
