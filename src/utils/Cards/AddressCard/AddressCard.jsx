import { useState } from 'react'

import css from './AddressCard.module.css'

import rightArrow from '/icons/right-arrow.png'

import DeleteModal from '../../../Modals/DeleteModal/DeleteModal'

const AddressCard = ({title, address}) => {

    let [modal, setModal] = useState(false);

  return <>
        <div className={css.outerDiv}>
            <div className={css.innerDiv}>
                <div>
                    <div className={css.ttl}>{title}</div>
                    <div className={css.address}>{address}</div>
                </div>
                <div className={css.btns}>
                    <button className={css.btn1}>Edit <span><img className={css.rightArrow} src={rightArrow} alt="Right Arrow" /></span></button>
                    <button className={css.btn2} onClick={()=> setModal(true)}>Delete</button>
                </div>
            </div>
        </div>
        {modal ? <DeleteModal setModal={setModal} txt="Are you sure you want to delete this address?" /> : "" }
  </>
}

export default AddressCard