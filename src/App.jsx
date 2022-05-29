import HomePageBanner from './components/HomePageBanner/HomePageBanner'
import SmallCard from './utils/card1/SmallCard'

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
    </div>

  </>
}

export default App
