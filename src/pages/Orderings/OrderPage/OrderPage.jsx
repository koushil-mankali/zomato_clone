import {useState} from 'react'

import css from './OrderPage.module.css'

import NavigationBar from '../../../components/Navbars/NavigationBar2/NavigationBar2'
import UploadPhotosModal from '../../../Modals/UploadPhotosModal/UploadPhotos'

const OrderPage = () => {

    let [modal, setModal] = useState(true)

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
  </div>
}

export default OrderPage