import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'


import css from './AddAddressCard.module.css'

let AddAddressCard = () => {

    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.mapBox}>

            </div>
            <div className={css.formBox}>

            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default AddAddressCard;