import css from './Card5.module.css';

let Card5 = ({ step, title, tag, img, color }) => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox} style={{ "backgroundColor": color }}>
                <img className={css.img} src={img} alt="image" />
            </div>
            <div className={css.txtBox}>
                <div className={css.step}>Step {step}</div>
                <div className={css.title}>{title}</div>
                <div className={css.tagLine}>{tag}</div>
            </div>
        </div>
    </div>
}

export default Card5;