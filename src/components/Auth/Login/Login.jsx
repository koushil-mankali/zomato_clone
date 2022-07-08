import {useState} from "react";
import { createPortal } from 'react-dom';

import gLogo from '/images/google.png';
import mailLogo from '/images/emailIcon.jpg';
import closeBtn from '/images/closeBtn.jpg';

import loginCss from './Login.module.css';

import EnterOTP from '../../Auth/EnterOTP/EnterOTP'

let Login = ({ setAuth, setLoggedIn }) => {
    const [phone, setPhone] = useState();

    let [otpModal, setOTPModal] = useState(false)

    let loginDiv = !otpModal ? <div className={loginCss.outerDiv}>
        <div className={loginCss.modal}>
            <div className={loginCss.header}>
                <span className={loginCss.ttl}>Login</span>
                <span className={loginCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
                    <img className={loginCss.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={loginCss.lgBox}>
                <input className={loginCss.phoneInp} type="tel" placeholder='Phone number ...' onChange={(e) => setPhone(e.target.value)} />
                <button  className={phone?.length === 10 ? [loginCss.btn, loginCss.Sbtn].join(" ") : loginCss.btn} onClick={()=> phone?.length === 10 ? setOTPModal(true) : ""}>Send OTP</button>
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
            <div className={loginCss.newToZomato}>New to Zomato? <div className={loginCss.createAcc} onClick={() => setAuth({ closed: false, login: false, signup: true })}>Create Account</div></div>
        </div>
    </div> :  <EnterOTP setModal={setOTPModal} setLoggedIn={setLoggedIn} setAuth={setAuth} />
    return createPortal(loginDiv, document.getElementById('modal'));
}

export default Login;