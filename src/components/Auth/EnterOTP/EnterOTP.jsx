import {useEffect, useState} from 'react';
import { createPortal } from 'react-dom'

import closeBtn from '/images/closeBtn.jpg';

import css from './EnterOTP.module.css'

let EnterOTP = ({setModal, setLoggedIn = () => {}, setAuth = () => {}}) => {

    let [count, setCount] = useState(60);

    const loginHandler = ()=> {
        setModal(false); 
        setLoggedIn(true);
        setAuth(false);
        localStorage.setItem("auth", true);
    }

    useEffect(()=>{
        if (!count) return;

        let interval = setInterval(()=>{
            if(count > 0){
                setCount(val => val - 1);
            }
        }, [1000])
    
        return () => clearInterval(interval);

    }, [count])

    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.title}>Enter OTP</div>
                <span className={css.closeBtn} onClick={() => setModal(false)}>
                    <img className={css.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={css.body}>
                <div className={css.txt1}>OTP send successfully</div>
                <div className={css.OTPBox}>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" defaultValue="2" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" defaultValue="2" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" defaultValue="2" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" defaultValue="2" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" defaultValue="2" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" defaultValue="2" />
                    </div>
                </div>
                <div onClick={loginHandler} className={css.okBtn}>OK</div>
                <div className={css.footerBox}>
                    <div className={css.time}>Time: {count}</div>
                    <div className={css.footerTxt}>Didn't receive OTP? <span className={css.resendTxt} onClick={() => setCount(60)}>Resend Now</span></div>
                </div>
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default EnterOTP;