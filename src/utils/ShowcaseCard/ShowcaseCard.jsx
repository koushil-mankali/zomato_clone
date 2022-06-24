import css from './ShowcaseCard.module.css';

import biryani from '/images/profilebanner.jpg'
import upArrowIcon from '/icons/up-arrow-icon.png';
import maxSAfety from '/icons/maxsafty.png';
import safeDelivery from '/icons/safe-delivery.png';
import star from '/icons/star.png';

let ShowcaseCard = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <div className={css.promoted}>Promoted</div>
                <img className={css.img} src={biryani} alt="food image" />
                <div className={css.off}>50% OFF</div>
                {/* <div className={css.offPro}>Pro extra 50% OFF</div> */}
                <div className={css.duration}>28 min</div>
            </div>
            <div className={css.txtBox}>
                <div className={css.titleBox}>
                    <div className={css.title}>Paradise Hotel</div>
                    <div className={css.ratingBox}> 3.6 <img className={css.star} src={star} alt="gorwing arrow" /></div>
                </div>
                <div className={css.tagBox}>
                    <div className={css.tagTitle}>South Indian</div>
                    <div className={css.tagTxt}>₹<span className={css.type}>350</span> for <span className={css.num}>One</span></div>
                </div>
            </div>
            <div className={css.footer}>
                <div className={css.scroll1}>
                    <div className={css.lg1}><img className={css.upArrow} src={upArrowIcon} alt="gorwing arrow" /></div>
                    <div className={css.ordersPlaces}>9000+ orders placed from here recently</div>
                    <div className={css.lg2}><img className={css.maxSafety} src={maxSAfety} alt="max safety" /></div>
                </div>
                <div className={css.scroll2}>
                    <div className={css.lg1}><img className={css.upArrow} src={upArrowIcon} alt="max safety" /></div>
                    <div className={css.ordersPlaces}>Follows all max safety mesaures to ensure your food is safe</div>
                    <div className={css.lg2}><img className={css.safeDelivery} src={safeDelivery} alt="safety delivery" /></div>
                </div>
            </div>
        </div>
    </div>
}

export default ShowcaseCard;