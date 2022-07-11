import { useState } from 'react'
import css from './AddPhotosCard.module.css'

import cameraIcon from '/icons/photo-camera.png'

import UploadPhotosModal from '../../../../Modals/UploadPhotosModal/UploadPhotos'

const AddPhotosCard = () => {

  const [modal, setModal] = useState(false);

  return <>
    <div className={css.outerDiv} onClick={() => setModal(true)}>
      <div className={css.innerDiv}>
        <div className={css.txtDiv}>
          <div className={css.imgDiv}>
              <img src={cameraIcon} className={css.img} />
          </div>
          <span className={css.txt}>Add Photos</span>
        </div>
      </div>
    </div>
    {modal ? <UploadPhotosModal setModal={setModal} /> : ""}
  </>
}

export default AddPhotosCard