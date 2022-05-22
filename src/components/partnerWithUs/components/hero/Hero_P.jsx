import css from './Hero_P.module.css';

import Banner2 from '../../../../../public/images/banner2.jpg';

let Hero_P = () => {
    return <div className={css.banner}>
        <div className={css.innerBanner}>
            <img src={Banner2} alt="banner" className={css.bannerImg} />
            <div className={css.bannerTxt}>
                <div className={css.innerBannerTxt}>
                    <div className={css.ttl}>Register your restaurant on Zomato</div>
                    <div className={css.tag}>for free and get more customers!</div>
                    <div className={css.btns}>
                        <button className={css.btn}>Register your Restaurant</button>
                        <button className={css.btn}>Restaurant already registered? Claim Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Hero_P;