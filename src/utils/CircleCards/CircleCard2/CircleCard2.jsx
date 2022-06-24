import css from './CircleCard2.module.css'

import biryaniC from '/icons/biryaniC.png'

let CircleCard2 = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgDiv}>
                <img className={css.img} src={biryaniC} alt="food image" />
            </div>
            <div className={css.txtBox}>
                <div className={css.title}>Name</div>
                <div className={css.duration}>45 min</div>
            </div>
        </div>
    </div>
}

export default CircleCard2;