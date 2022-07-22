import css from './CircleCard2.module.css'

import biryaniC from '/icons/biryaniC.png'

let CircleCard2 = ({ imgSrc, name, time }) => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgDiv}>
                <img className={css.img} src={imgSrc} alt="food image" />
            </div>
            <div className={css.txtBox}>
                <div className={css.title}>{name}</div>
                <div className={css.duration}>{time} min</div>
            </div>
        </div>
    </div>
}

export default CircleCard2;