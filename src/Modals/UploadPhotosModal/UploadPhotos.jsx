import {useEffect, useState} from 'react'
import { createPortal } from 'react-dom'

import css from './UploadPhotosModal.module.css'

import closeBtn from '/images/closeBtn.jpg';

import UploadPhotoCard from './UploadPhotoCard/UploadPhotoCard'
import RedBtnHov from '../../utils/Buttons/RedBtnHov/RedBtnHov'
import GrayBtn from '../../utils/Buttons/GrayBtn/GrayBtn'

const UploadPhotosModal = ({setModal}) => {

  const [anyUpload, setAnyUpload] = useState(false);
  const [files, setFiles] = useState([]);
  let [isError, setIsError] = useState({});
  let [errorMessage, setErrorMessage] = useState({});

  const submitFiles = () => {
    console.log(files, "submit form");
  }

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
          <UploadPhotoCard setAnyUpload={setAnyUpload} setFiles={setFiles} files={files} isError={isError} setIsError={setIsError} setErrorMessage={setErrorMessage} errorMessage={errorMessage} />
      </div>
      <div className={css.btns}>
          {anyUpload && !Object.values(isError)?.some(val => val === true) ? <RedBtnHov txt="Upload" onClick={submitFiles} /> : 
           <GrayBtn txt="Upload" disabled /> }
      </div>
    </div>
  </div>

  return createPortal(domObj, document.getElementById('modal'));
}

export default UploadPhotosModal