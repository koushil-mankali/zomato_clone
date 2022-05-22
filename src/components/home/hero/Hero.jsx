import Navbar from '../navbar/Navbar'
import Searchbar from '../../searchbar/Searchbar'

import ZomatoName from '../../../../public/images/zomato1.png'
import './Hero.css'

function Hero({ setAuth }) {
    return <>
        <Navbar setAuth={setAuth} />
        <div className='heroSection'>
            <div className='foodbanner' />
            <div className='bannerBody'>
                <img className='bannerTitle' src={ZomatoName} />
                <div className='bannerTxt'>Discover the best food & drinks in <span className='bannerTxtCity'>Hyderabad</span></div>
                <Searchbar />
            </div>
        </div>
    </>
}

export default Hero;