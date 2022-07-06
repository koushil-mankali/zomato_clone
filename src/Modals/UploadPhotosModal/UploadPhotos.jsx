import {useState} from 'react'
import { createPortal } from 'react-dom'

import css from './UploadPhotosModal.module.css'

import closeBtn from '/images/closeBtn.jpg';

import UploadPhotoCard from './UploadPhotoCard/UploadPhotoCard'
import RedBtnHov from '../../utils/Buttons/RedBtnHov/RedBtnHov'
import GrayBtn from '../../utils/Buttons/GrayBtn/GrayBtn'

const UploadPhotosModal = ({setModal}) => {

  let [anyUpload, setAnyUpload] = useState(false);

  const domObj = <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.header}>
          <div className={css.headerLeft}>
              <div className={css.title}>Add Photos</div>
          </div>
          <span className={css.closeBtn} onClick={() => setModal(val => !val)}>
              <img className={css.closeBtnImg} src={closeBtn} alt="close button" />
          </span>
      </div>
      <div className={css.bdy}>
          <UploadPhotoCard setAnyUpload={setAnyUpload} />
      </div>
      <div className={css.btns}>
          {anyUpload ? <RedBtnHov txt="Upload" /> :
          <GrayBtn txt="Upload" disabled /> }
      </div>
    </div>
  </div>

  return createPortal(domObj, document.getElementById('modal'));
}

export default UploadPhotosModal