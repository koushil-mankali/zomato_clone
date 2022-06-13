import css from './User.module.css'

import Navbar from '../../components/NavigationBar2/NavigationBar2'
import UserHero from '../../utils/UserHero/UserHero'

const User = () => {
  return (<div className={css.outerDiv}>
    <div className={css.navbar}>
      <Navbar />
    </div>
    <div className={css.box}>
      <UserHero />
    </div>
  </div>)
}

export default User