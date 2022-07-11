import { useState } from 'react';
import { Link } from 'react-router-dom'

import close from '/icons/close.png'

import css from './MobileNavbar.module.css';

import Login from '../../Auth/Login/Login'
import Signup from '../../Auth/Signup/Signup'

let MobileNavbar = ({ toogleMenu, setToggleMenu }) => {
    let [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
    let [auth, setAuth] = useState({
        closed: true,
        login: false,
        signup: false
    });

    return <>
    <div className={css.mobileMenu}>
        <div className={css.menu}>
            <img className={css.menuBar} src={close} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
            <Link className={css.title} to='/'>Tomato</Link>
        </div>
        <div className={css.navbar}>
            <Link to='/add-restaurant' className={css.menuItem} >Add restuarant</Link>
            <div className={css.menuItem} onClick={() => setAuth({ closed: false, login: true, signup: false })}>Log in</div>
            <div className={css.menuItem} onClick={() => setAuth({ closed: false, login: false, signup: true })}>Sign up</div>
        </div>
    </div>
    <div className={css.modals}>
        {auth?.login ? <Login setAuth={setAuth} setLoggedIn={setLoggedIn} /> : null}
        {auth?.signup ? <Signup setAuth={setAuth} /> : null}
    </div>
    </>
}

export default MobileNavbar;