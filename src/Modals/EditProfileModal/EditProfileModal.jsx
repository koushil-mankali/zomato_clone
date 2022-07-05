import { createPortal } from 'react-dom'

import closeBtn from '/images/closeBtn.jpg';

import css from './EditProfileModal.module.css'

import RedBtnHov from '../../utils/Buttons/RedBtnHov/RedBtnHov' 
import WhiteBtnHov from '../../utils/Buttons/WhiteBtnHov/WhiteBtnHov' 

const EditProfileModal = ({setModal}) => {
  const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.headerLeft}>
                    <div className={css.title}>Edit Profile</div>
                </div>
                <span className={css.closeBtn} onClick={() => setModal(val => !val)}>
                    <img className={css.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={css.banner}>

            </div>
            <div className={css.bdy}>

                <div className={css.btns}>
                    <WhiteBtnHov txt="Cancel" />
                    <RedBtnHov txt="Update" />
                </div>
            </div>
        </div>
    </div>

  return createPortal(domObj, document.getElementById('modal'));
}

export default EditProfileModal