import css from './SmallBannerCard.module.css';

import SmallBanner from '/banners/smallbanner1.jpg';
import rightArrow from '/icons/right-arrow.png';

let SmallBannerCard = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img className={css.img} src={SmallBanner} alt="banner" />
            </div>
            <div className={css.textBox}>
                <div className={css.title}>Start your journey with Tomato</div>
                <div className={css.tag}>Create your restaurant page and register for online ordering</div>
                <button className={css.btn}>
                    <span className={css.btnTitle}>Start now</span>
                    <span className={css.btnArrow}>
                        <img className={css.arrow} src={rightArrow} alt="right arrow" />
                    </span>
                </button>
            </div>
        </div>
    </div>
}

export default SmallBannerCard;