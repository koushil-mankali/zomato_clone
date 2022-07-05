import {useState} from "react"

import css from './UserHero.module.css'

import HeroBanner from '/images/profilebanner.jpg'
import user from '/icons/biryaniC.png'
import edit from '/icons/edit.png'
import location from '/icons/location.png'

import EditProfileModal from '../../../Modals/EditProfileModal/EditProfileModal'

const UserHero = () => {
  const [modal, setModal] = useState(false)

  return <>
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgSec}>
                <img className={css.bannerImg} src={HeroBanner} alt="User Hero Section Image" />
            </div>
            <div className={css.txtBox}>
              <div className={css.leftBox}>
                <div className={css.profileImgBox}>
                  <img className={css.profileImg} src={user} alt='user image' />
                </div>
                <div className={css.profileDetails}>
                  <div className={css.name}>Name</div>
                  <span className={css.location}> <img src={location} className={css.locationIcon} /> Location</span>
                </div>
              </div>
              <div className={css.rightBox}>
                <div className={css.editBtn} onClick={() => setModal(val => !val)}><span className={css.editProfileIconBox}><img src={edit} alt='edit icon' className={css.editProfileIcon} /></span>Edit Profile</div>
                <div className={css.rightBoxInner}>
                  <span className={css.boxTxt}>
                    <span className={css.count}>1</span>
                    <span className={css.countTxt}>Reviews</span>
                  </span>
                  <hr className={css.bar} />
                  <span className={css.boxTxt}>
                    <span className={css.count}>1</span>
                    <span className={css.countTxt}>Photos</span>
                  </span>
                  <hr className={css.bar} />
                  <span className={css.boxTxt}>
                    <span className={css.count}>1</span>
                    <span className={css.countTxt}>Followers</span>
                  </span>
                </div>
              </div>
            </div>
        </div>
    </div>
    {modal ? <EditProfileModal setModal={setModal} /> : "" }
  </>
}

export default UserHero