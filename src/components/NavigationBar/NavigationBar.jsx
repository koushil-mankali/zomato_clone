import { useState } from 'react';
import { Link } from 'react-router-dom'

import mobileHand from '../../../public/icons/smartphone.png'
import menuBar from '../../../public/icons/menu.png'
import downArrow from '../../../public/icons/down-arrow.png'
import profilePic from '../../../public/images/profilepic.jpg'

import css from './NavigationBar.module.css';

let NavigationBar = ({ toogleMenu, setToggleMenu }) => {
    let [loggedIn, setLoggedIn] = useState(false);

    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.leftSide}>
                <img src={mobileHand} alt="mobile in hand icon" className={css.img} />
                <Link to='/get-the-app' className={css.appTxt}>Get The App</Link>
            </div>
            <div className={css.rightSide}>
                <Link to='/add-restauarnt' className={css.menuItem} >Add restuarant</Link>
                {loggedIn ? (<div className={css.menuItem}>
                    <div className={css.profile}>
                        <img src={profilePic} alt="profile pic" className={css.profilePic} />
                        <div className={css.profileName}>Profile</div>
                        <img src={downArrow} alt="arrow" className={css.arrow} />
                    </div>
                    <div className={css.menu}>
                        <div className={css.menuItemLink}>
                            <Link to='/profile' className={css.menuItemLinkTxt}>Profile</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/notifications' className={css.menuItemLinkTxt}>Notifications</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/bookmarks' className={css.menuItemLinkTxt}>Bookmarks</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/reviews' className={css.menuItemLinkTxt}>Reviews</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/network' className={css.menuItemLinkTxt}>Network</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/find-friends' className={css.menuItemLinkTxt}>Find Friends</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/settings' className={css.menuItemLinkTxt}>Settings</Link>
                        </div>
                        <div className={css.menuItemLink}>
                            <Link to='/logout' className={css.menuItemLinkTxt} onClick={() => setLoggedIn(false)}>Logout</Link>
                        </div>
                    </div>
                </div>) : (<>
                    <div className={css.menuItem} onClick={setLoggedIn}>Log in</div>
                    <div className={css.menuItem}>Sign up</div>
                </>)}
            </div>
        </div>
    </div>
}

export default NavigationBar;