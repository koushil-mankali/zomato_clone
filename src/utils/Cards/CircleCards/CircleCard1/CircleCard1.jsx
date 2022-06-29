import css from './CircleCard1.module.css'

import biryaniC from '/icons/biryaniC.png'

let CircleCard1 = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgDiv}>
                <img className={css.img} src={biryaniC} alt="food image" />
            </div>
            <div className={css.title}>Name</div>
        </div>
    </div>
}

export default CircleCard1;