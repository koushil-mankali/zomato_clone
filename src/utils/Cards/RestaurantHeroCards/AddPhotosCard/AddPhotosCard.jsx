import css from './AddPhotosCard.module.css'

import cameraIcon from '/icons/photo-camera.png'

const AddPhotosCard = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.txtDiv}>
        <div className={css.imgDiv}>
            <img src={cameraIcon} className={css.img} />
        </div>
        <span className={css.txt}>Add Photos</span>
      </div>
    </div>
  </div>
}

export default AddPhotosCard