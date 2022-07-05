import { createPortal } from 'react-dom'

import closeBtn from '/images/closeBtn.jpg';

import css from './EnterOTP.module.css'

let EnterOTP = ({setModal}) => {
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
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" />
                    </div>
                    <div className={css.otpNumBox}>
                        <input className={css.inpBox} type="text" name="" id="" maxLength="1" />
                    </div>
                </div>
                <div className={css.footerBox}>
                    <div className={css.time}>00:19</div>
                    <div className={css.footerTxt}>Didn't receive OTP? <span className={css.resendTxt}>Resend Now</span></div>
                </div>
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default EnterOTP;