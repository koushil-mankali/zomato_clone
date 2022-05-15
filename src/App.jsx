import { useState } from 'react'

import Hero from './components/home/hero/Hero'
import SmallCard from './utils/smallCard/SamllCard'
import LocationsComp from './components/home/locations/LocationsComp'
import CollectionsComp from './components/home/collections/CollectionsComp'
import GetTheApp from './components/home/getTheApp/GetTheAppComp'

import './App.css'

import img from '../public/images/food1.png'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Hero />
    <div className='sec2'>
      <div className='sec2-container'>
        <div className='cards'>
          <SmallCard imgSrc={img} text="Order Online" />
          <SmallCard imgSrc={img} text="Dining Out" />
          <SmallCard imgSrc={img} text="Pro and Pro Plus" />
          <SmallCard imgSrc={img} text="Night Life and Clubs" />
        </div>
      </div>
    </div>
    <CollectionsComp />
    <LocationsComp />
    <GetTheApp />
  </>)
}

export default App
