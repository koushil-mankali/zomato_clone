import css from './Card4.module.css'

let Card4 = ({ imgSrc, title, tagLine }) => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}><img className={css.img} src={imgSrc} alt="image" /></div>
            <div className={css.txtBox}>
                <div className={css.title}>{title}</div>
                <div className={css.tagLine}>{tagLine}</div>
            </div>
        </div>
    </div>
}

export default Card4;