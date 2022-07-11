import { useState } from 'react'
import { Link } from 'react-router-dom'

import close from '/icons/close.png'
import downArrow from '/icons/down-arrow.png'
import rightArrow from '/icons/right-arrow1.png'
import profilePic from '/images/profilepic.jpg'

import css from './AddRestaurantMobileNavbar.module.css';

let AddRestaurantMobileNavbar = ({ toogleMenu, setToggleMenu }) => {

    let [state, setState] = useState(true);

    let dropdownOptions = state ? css.optionsBox : `${css.optionsBox} ${css.dnone}`;

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("auth");
    }

    return <div className={css.navbarH}>
        <div className={css.menu}>
            <img className={css.menuBar} src={close} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
            <Link to='/' className={css.title}>Tomato</Link>
        </div>
        <div className={css.navbar} onClick={() => setState(val => !val)}>
            <span className={css.profile}>
                <img src={profilePic} alt="profile pic" className={css.profilePic} />
                <div className={css.profileName}>Profile</div>
            </span>
            <img src={downArrow} className={css.downArrow} alt='down arrow' />
        </div>
        <div className={dropdownOptions}>
            <Link to='/my-restaurants' className={css.options}>
                <div className={css.profileName}>My Restaurants</div>
                <img src={rightArrow} className={css.rightArrow} alt='right arrow' />
            </Link>
            <div className={css.options} onClick={logoutHandler}>
                <div className={css.profileName}>
                    Logout
                </div>
            </div>
        </div>
    </div>
}

export default AddRestaurantMobileNavbar;