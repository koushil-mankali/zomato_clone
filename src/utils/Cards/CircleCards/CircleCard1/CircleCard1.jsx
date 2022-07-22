import css from './CircleCard1.module.css'

let CircleCard1 = ({ imgSrc, name }) => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgDiv}>
                <img className={css.img} src={imgSrc} alt="food image" />
            </div>
            <div className={css.title}>{name}</div>
        </div>
    </div>
}

export default CircleCard1;