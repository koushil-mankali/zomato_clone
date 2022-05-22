import { useNavigate } from "react-router-dom";

import css from './Navbar.module.css'

import Zomato from '../../../public/images/zomato3.jpg'

let Navbar = () => {
    let navigate = useNavigate();

    let navigateHandler = () => {
        console.log('navigate')
        navigate("/");
    }

    return <div className={css.navbar}>
        <div className={css.innerNav}>
            <div></div>
            <img src={Zomato} alt="zomato logo" className={css.logo} onClick={navigateHandler} />
            <div className={css.authBtns}>
                <div className={css.btn}>Log in</div>
                <div className={css.btn}>Sign up</div>
            </div>
        </div>
    </div>
}

export default Navbar;