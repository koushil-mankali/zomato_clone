import { Link } from 'react-router-dom'

import css from './SmallCardImg.module.css';

let SmallCardImg = ({ imgSrc, link='#' }) => {
    return <Link to={link} className={css.card}>
        <div className={css.imgBox} >
            <img src={imgSrc} alt="card image" className={css.img} />
        </div>
    </Link>
}

export default SmallCardImg;