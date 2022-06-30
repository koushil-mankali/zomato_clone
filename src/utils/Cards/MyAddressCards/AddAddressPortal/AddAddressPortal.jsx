import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'

import css from './AddAddressPortal.module.css'

import SetDeliveryLocation from '../SetDeliveryLocation/SetDeliveryLocation'
import AddAddressForm from '../AddAddressForm/AddAddressForm'
import SearchLocation from '../SearchLocation/SearchLocation'

let AddAddressPortal = ({setAddressModal}) => {

    let [page, setPage] = useState(1);
    let [searchComp, setSearchComp] = useState(false);

    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            {searchComp ? (
                <SearchLocation setSearchComp={setSearchComp} />
            ): (
            <>
                <div className={css.mapBox}>
                    map
                </div>
                <div className={css.formBox}>
                    {page === 1 ? (
                        <SetDeliveryLocation setPage={setPage} setAddressModal={setAddressModal} setSearchComp={setSearchComp} />
                        ) : <AddAddressForm setPage={setPage} setAddressModal={setAddressModal} setSearchComp={setSearchComp} /> }
                </div>
            </>
            )}
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default AddAddressPortal;