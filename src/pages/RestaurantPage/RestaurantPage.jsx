import {useState} from 'react'

import css from './RestaurantPage.module.css'

import NavigationBar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import UploadPhotosModal from '../../Modals/UploadPhotosModal/UploadPhotos'
import DownloadAppUtil from '../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'
import HeroComponent from '../../components/RestaurantComponents/HeroComponent/HeroComponent'
import OrderTitleComponent from '../../components/RestaurantComponents/OrderTitleComponent/OrderTitleComponent'
import OrderBodyComponent from '../../components/RestaurantComponents/OrderBodyComponent/OrderBodyComponent'

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
    <HeroComponent />
    <div className={css.innerDiv2}>
      <OrderTitleComponent />
      <OrderBodyComponent />
    </div>
    <div style={{height: "100vh"}}></div>
    {/* <DownloadAppUtil /> */}
  </div>
}

export default RestaurantPage