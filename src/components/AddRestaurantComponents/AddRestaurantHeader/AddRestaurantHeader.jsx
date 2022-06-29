import { useState } from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../../Navbars/NavigationBar/NavigationBar'
import AddRestaurantMobileNavbar from '../../Navbars/AddRestaurantMobileNavbar/AddRestaurantMobileNavbar';

import css from './AddRestaurantHeader.module.css'

import banner from '/banners/banner2.jpg'

let AddRestaurantHeader = () => {
    let [toogleMenu, setToggleMenu] = useState(true);

    let toggleBanner = toogleMenu ? (<div className={css.banner}>
        <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} page="add-restaurant" />
        <div className={css.bannerInner}>
            <img src={banner} alt="banner" className={css.bannerImg} />
            <div className={css.bannerTxt}>
                <div className={css.title}>Register your restaurant on Zomato</div>
                <div className={css.tag}>for free and get more customers!</div>
                <div className={css.btns}>
                    <Link to='/' className={css.btn}>Register your restaurant</Link>
                    <Link to='/' className={css.btn}>Restaurant already listed? Claim now</Link>
                </div>
            </div>
        </div>
    </div>) : <AddRestaurantMobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

    return toggleBanner;
}

export default AddRestaurantHeader;