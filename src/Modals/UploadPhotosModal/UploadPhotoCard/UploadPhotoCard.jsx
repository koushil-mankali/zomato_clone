import {useEffect, useState} from 'react'

import css from './UploadPhotoCard.module.css'

import uploadImage from '/images/upload-image.png'

const UploadPhotoCard = ({setAnyUpload}) => {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    if(files?.length > 0){
      setAnyUpload(true);
    }else{
      setAnyUpload(false)
    }
  }, [files])

  const fileUplaod = (e) => {
    setFiles(val => {return [...val, e.target.files[0]]});
  }

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.txt}>
          Drag & Drop to upload or 
          <input type='file' id="browse" name="browse" className={css.browseInpt} onChange={e => fileUplaod(e)} />
          <label htmlFor="browse" className={css.browseTxt}>Browse</label>
        </div>
        <div className={css.imgBox}>
            <img src={uploadImage} className={css.img} alt="upload image" />
        </div>
    </div>
  </div>
}

export default UploadPhotoCard