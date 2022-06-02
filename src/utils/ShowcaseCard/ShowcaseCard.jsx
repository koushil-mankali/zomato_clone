import css from './ShowcaseCard.module.css';

import biryani from '../../../public/images/profilebanner.jpg'

let ShowcaseCard = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img className={css.img} src={biryani} alt="food image" />
                <div className={css.duration}>28 min</div>
            </div>
            <div className={css.txtBox}>
                <div className={css.titleBox}>
                    <div className={css.title}>Paradise Hotel</div>
                    <div className={css.ratingBox}> 3.6 ⭐</div>
                </div>
                <div>
                    <div className={css.title}>South Indian</div>
                    <div className={css.ratingBox}><span className={css.type}>350</span> for <span className={css.num}>One</span></div>
                </div>
            </div>
            <div className={css.footer}>
                <div className={css.lg1}></div>
                <div className={css.ordersPlaces}></div>
                <div className={css.lg2}></div>
            </div>
        </div>
    </div>
}

export default ShowcaseCard;