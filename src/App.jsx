import HomePageBanner from './components/HomePageBanner/HomePageBanner'
import SmallCard from './utils/card1/SmallCard'
import Collections from './components/Collections/Collections'
import PopularPlaces from './components/PopularPlaces/PopularPlaces'
import GetTheApp from './components/GetTheApp/GetTheApp'
import ExploreOptionsNearMe from './components/ExploreOptionsNearMe/ExploreOptionsNearMe'
import Footer from './components/Footer/Footer'

import orderOnlineImg from '/images/orderonline.jpg'

import css from './App.module.css'

import { orderOnlinePage, diningOutPage, proAndProPlusPage, nightLifePage } from './helpers/constants';

function App() {

  return <>
    <HomePageBanner />
    <div className={css.bodySize}>
      <div className={css.chooseTypeCards}>
        <SmallCard imgSrc={orderOnlineImg} text="Order Online" link={"/show-case?page=" + orderOnlinePage} />
        <SmallCard imgSrc={orderOnlineImg} text="Dining Out" link={'/show-case?page=' + diningOutPage} />
        <SmallCard imgSrc={orderOnlineImg} text="Pro and Pro Plus" link={'/show-case?page=' + proAndProPlusPage} />
        <SmallCard imgSrc={orderOnlineImg} text="Night Life and Clubs" link={'/show-case?page=' + nightLifePage} />
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
