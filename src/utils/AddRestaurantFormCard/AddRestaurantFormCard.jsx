import { Link } from 'react-router-dom'

import css from './AddRestaurantFormCard.module.css';

let AddRestaurantFormCard = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <button className={css.btn}>Submit</button>
            <div className={css.tag}>Restaurant owners can <Link to='' className={css.link}>add restaurant from here</Link></div>
        </div>
    </div>
}

export default AddRestaurantFormCard;