import {useState} from 'react'

import css from './AddAddressForm.module.css'

import closeIcon from '/icons/close.png'
import checkMarkIcon from '/icons/check-mark.png'

const AddAddressForm = ({setPage, setAddressModal, setSearchComp}) => {
  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.ttl}>Add Address</div>
                <div className={css.imgBox} onClick={() => setPage(1)}><img className={css.closeIcon} src={closeIcon} /></div>
            </div>
            <div className={css.bdy}>
                <div className={css.labelTxt}>DELIVERY AREA</div>
                <div className={css.addBox}>
                    <div className={css.addressBx}>
                        <div className={css.addIcon}><img className={css.rightArrIcon} src={checkMarkIcon} /></div>
                        <div className={css.address}>Malkajgiri, Mir Alam Mandi, Pathar Gatti</div>
                    </div>
                    <div className={css.chgTxt} onClick={()=> setSearchComp(true)}>CHANGE</div>
                </div>
            </div>
            <div className={css.ftr}>
                <div className={css.btn} onClick={() => setAddressModal(false)}>
                    Save And Proceed
                </div>
            </div>
        </div>
  </div>
}

export default AddAddressForm 