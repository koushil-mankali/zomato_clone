import css from './GetTheApp.module.css'

import Navbar2 from '../../components/Navbars/NavigationBar2/NavigationBar2'
import GetTheAppComp from '../../components/HomeComponents/GetTheApp/GetTheApp'
import Footer from '../../components/Footer/Footer'

const GetTheApp = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <Navbar2 />
        <GetTheAppComp />
        <Footer />
    </div>
  </div>
}

export default GetTheApp