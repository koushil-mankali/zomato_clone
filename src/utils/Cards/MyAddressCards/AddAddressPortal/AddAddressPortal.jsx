import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'

import css from './AddAddressPortal.module.css'

import SearchLocation from '../SearchLocation/SearchLocation'

let AddAddressPortal = ({setAddressModal}) => {

    let [page, setPage] = useState(1);

    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.mapBox}>
                map
            </div>
            <div className={css.formBox}>
                {page === 1 ? (
                    <SearchLocation setPage={setPage} setAddressModal={setAddressModal}/>
                    ) : "" }
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default AddAddressPortal;