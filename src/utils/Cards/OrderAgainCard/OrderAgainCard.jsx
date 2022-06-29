import css from './OrderAgainCard.module.css'

import img from '/images/orderonline.jpg'

let OrderAgainCard = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img className={css.img} src={img} alt="food image" />
            </div>
            <div className={css.txtBox}>
                <div className={css.title}>Title</div>
                <div className={css.duration}>47 min</div>
            </div>
        </div>
    </div>
}

export default OrderAgainCard;