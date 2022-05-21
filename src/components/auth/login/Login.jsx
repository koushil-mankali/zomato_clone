import { createPortal } from 'react-dom';

import gLogo from '../../../../public/images/glogo.png';
import mailLogo from '../../../../public/images/emailIcon.jpg';
import closeBtn from '../../../../public/images/closeBtn.jpg';;

import loginCss from './Login.module.css';

let Login = () => {
    let loginDiv = <div className={loginCss.outerDiv}>
        <div className={loginCss.modal}>
            <div className={loginCss.header}>
                <span className={loginCss.ttl}>Login</span>
                <span className={loginCss.closeBtn}>
                    <img className={loginCss.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={loginCss.lgBox}>
                <input className={loginCss.phoneInp} type="tel" placeholder='Phone number ...' />
                <button className={loginCss.btn}>Send OTP</button>
            </div>
            <div className={loginCss.orBreak}><span className={loginCss.orBreakText}>or</span></div>
            <div className={loginCss.socialSignupBox}>
                <img className={loginCss.icon} src={mailLogo} alt="email signup" />
                Continue with Email
            </div>
            <div className={loginCss.socialSignupBox}>
                <img className={loginCss.icon} src={gLogo} alt="google signup" />
                Continue with Google
            </div>
            <hr className={loginCss.break} />
            <div className={loginCss.newToZomato}>New to Zomato? <a className={loginCss.createAcc} href="">Create Account</a></div>
        </div>
    </div>
    return createPortal(loginDiv, document.getElementById('modal'));
}

export default Login;