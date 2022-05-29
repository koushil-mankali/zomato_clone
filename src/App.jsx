import HomePageBanner from './components/HomePageBanner/HomePageBanner'
import SmallCard from './utils/card1/SmallCard'
import Collections from './components/Collections/Collections'
import PopularPlaces from './components/PopularPlaces/PopularPlaces'
import GetTheApp from './components/GetTheApp/GetTheApp'
import ExploreOptionsNearMe from './components/ExploreOptionsNearMe/ExploreOptionsNearMe'
import Footer from './components/Footer/Footer'

import orderOnlineImg from '../public/images/orderonline.jpg'

import css from './App.module.css'

function App() {
  return <>
    <HomePageBanner />
    <div className={css.bodySize}>
      <div className={css.chooseTypeCards}>
        <SmallCard imgSrc={orderOnlineImg} text="Order Online" />
        <SmallCard imgSrc={orderOnlineImg} text="Dining Out" />
        <SmallCard imgSrc={orderOnlineImg} text="Pro and Pro Plus" />
        <SmallCard imgSrc={orderOnlineImg} text="Night Life and Clubs" />
      </div>
      <Collections />
      <PopularPlaces />
    </div>
    <GetTheApp />
    <ExploreOptionsNearMe />
    <Footer />
  </>
}

export default App
