import { createPortal } from 'react-dom'

import closeBtn from '/images/closeBtn.jpg';

import css from './OrderDetails.module.css'

let OrderDetails = ({setViewDet}) => {
    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.title}>Enter OTP</div>
                <span className={css.closeBtn} onClick={() => setViewDet(val => !val)}>
                    <img className={css.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default OrderDetails;