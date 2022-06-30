import {useState} from 'react'

import css from './SetDeliveryLocation.module.css'

import closeIcon from '/icons/close.png'
import checkMarkIcon from '/icons/check-mark.png'

const SetDeliveryLocation = ({setPage, setAddressModal, setSearchComp}) => {
  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.ttl}>Set your delivery location</div>
                <div className={css.imgBox} onClick={() => setAddressModal(false)}><img className={css.closeIcon} src={closeIcon} /></div>
            </div>
            <div className={css.bdy}>
                <div className={css.labelTxt}>DELIVERY AREA</div>
                <div className={css.addBox}>
                    <div className={css.addressBx}>
                        <div className={css.addIcon}><img className={css.rightArrIcon} src={checkMarkIcon} /></div>
                        <div className={css.address}>Malkajgiri, Mir Alam Mandi, Pathar Gatti</div>
                    </div>
                    <div className={css.chgTxt} onClick={()=>setSearchComp(true)}>CHANGE</div>
                </div>
            </div>
            <div className={css.ftr}>
                <div className={css.btn} onClick={() => setPage(2)}>
                        Confirm And Proceed
                </div>
            </div>
        </div>
  </div>
}

export default SetDeliveryLocation 