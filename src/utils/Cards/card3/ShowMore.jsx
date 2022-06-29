import css from './ShowMore.module.css';

import downArrow from '/icons/down-arrow.png';

let ShowMore = ({ setShowMore }) => {
    return <div onClick={() => setShowMore(val => !val)} className={css.card}>
        <div className={css.innerBox}>
            <div className={css.place}>see more</div>
            <img className={css.arrow} src={downArrow} alt="down arrow" />
        </div>
    </div>
}

export default ShowMore;