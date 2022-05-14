import Navbar from '../navbar/Navbar'

import ZomatoName from '../../../../public/images/zomato1.png'
import './Hero.css'

function Hero() {
    return <>
        <Navbar />
        <div className='heroSection'>
            <div className='foodbanner' />
            <div className='bannerBody'>
                <img className='bannerTitle' src={ZomatoName} />
                <div className='bannerTxt'>Discover the best food & drinks in <span className='bannerTxtCity'>Hyderabad</span></div>
            </div>
        </div>
    </>
}

export default Hero;