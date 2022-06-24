import { Link } from 'react-router-dom'

import close from '/icons/close.png'

import css from './MobileNavbar.module.css';

let MobileNavbar = ({ toogleMenu, setToggleMenu }) => {
    return <div>
        <div className={css.menu}>
            <img className={css.menuBar} src={close} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
            <div className={css.title}>Tomato</div>
        </div>
        <div className={css.navbar}>
            <Link to='/add-restauarnt' className={css.menuItem} >Add restuarant</Link>
            <div className={css.menuItem}>Log in</div>
            <div className={css.menuItem}>Sign up</div>
        </div>
    </div>
}

export default MobileNavbar;