import { createPortal } from 'react-dom';

import gLogo from '../../../../public/images/glogo.png';
import mailLogo from '../../../../public/images/emailIcon.jpg';
import closeBtn from '../../../../public/images/closeBtn.jpg';;

import signupCss from './Signup.module.css';

let Signup = () => {
    let loginDiv = <div className={signupCss.outerDiv}>
        <div className={signupCss.modal}>
            <div className={signupCss.header}>
                <span className={signupCss.ttl}>Signup</span>
                <span className={signupCss.closeBtn}>
                    <img className={signupCss.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={signupCss.lgBox}>
                <input className={signupCss.inpBox} type="text" placeholder='Full Name ...' />
                <input className={signupCss.inpBox} type="email" placeholder='Email ...' />
                <span className={signupCss.termsTxt}>
                    <input type="checkbox" name="accpect" id="accpect" className={signupCss.checkBox} />
                    <span>
                        I agree to Zomato's <a href="" className={signupCss.termaAnchor}>Terms of Service, Privacy Policy</a> and <a href="" className={signupCss.termaAnchor}>Content Policies</a>
                    </span>
                </span>
                <button className={signupCss.btn}>Create Account</button>
            </div>
            <div className={signupCss.orBreak}><span className={signupCss.orBreakText}>or</span></div>
            <div className={signupCss.socialSignupBox}>
                <img className={signupCss.icon} src={gLogo} alt="google login" />
                Continue with Google
            </div>
            <hr className={signupCss.break} />
            <div className={signupCss.newToZomato}>Already have an account? <a className={signupCss.createAcc} href="">Log in</a></div>
        </div>
    </div>
    return createPortal(loginDiv, document.getElementById('modal'));
}

export default Signup;