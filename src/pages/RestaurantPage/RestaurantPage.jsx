import {useState} from 'react'

import css from './RestaurantPage.module.css'

import NavigationBar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import UploadPhotosModal from '../../Modals/UploadPhotosModal/UploadPhotos'
import DownloadAppUtil from '../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'

const RestaurantPage = () => {

    let [modal, setModal] = useState(false)

  return <div className={css.outerDiv}>
    <NavigationBar />
    <div className={css.innerDiv}>
        <div className={css.breadcrumb}>
            Home
            /
            India
            /
            Hyderabad
            /
            Hyderabad City
            /
            Indira Nagar
        </div>
        {modal ? <UploadPhotosModal setModal={setModal} /> : ""}
    </div>
    <DownloadAppUtil />
  </div>
}

export default RestaurantPage