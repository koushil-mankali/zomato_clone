import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'

import css from './DownloadAppModal.module.css'

import GetTheApp2 from '../../components/RestaurantComponents/GetTheApp2/GetTheApp2'

let DownloadAppModal = ({setModal}) => {

    const domObj = <div className={css.outerDiv} id="outerDiv" onClickCapture={() => setModal(false)}>
        <div className={css.innerDiv}>
            <GetTheApp2 setModal={setModal} />
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default DownloadAppModal;