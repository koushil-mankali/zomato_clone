import footerCss from './Footer.module.css';

import Gstore from '/icons/playstore.png';
import Appstore from '/icons/appstore.png';
import indianFlag from '/images/indiaflag.png';

import Facebook from '/images/facebook.png'
import Twitter from '/images/twitter.png'
import Instagram from '/images/instagram.png'
import Linkedin from '/images/linkedin.png'
import Youtube from '/images/youtube.png'

let Footer = () => {
    return <div className={footerCss.footer}>
        <div className={footerCss.innerFooter}>
            <div className={footerCss.sec1}>
                <div className={footerCss.logoBox}>Tomato</div>
                <div className={footerCss.filters}>
                    <div className={footerCss.filterBox}> <span>
                        <img className={footerCss.icon} src={indianFlag} alt="india flag" />
                    </span>
                        <span>India</span>
                        <span className={footerCss.arrow} >&#709;</span></div>
                    <div className={footerCss.filterBox}><span>🌐<span></span> English</span> <span className={footerCss.arrow} >&#709;</span></div>
                </div>
            </div>
            <div className={footerCss.sec2}>
                <div className={[footerCss.box1, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>ABOUT TOMATO</div>
                    <a href="" className={footerCss.boxOpt}>Who We Are</a>
                    <a href="" className={footerCss.boxOpt}>Blog</a>
                    <a href="" className={footerCss.boxOpt}>Work With Us</a>
                    <a href="" className={footerCss.boxOpt}>Investor Relations</a>
                    <a href="" className={footerCss.boxOpt}>Report Fraud</a>
                </div>
                <div className={[footerCss.box2, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>TOMAVERSE</div>
                    <a href="" className={footerCss.boxOpt}>Tomato</a>
                    <a href="" className={footerCss.boxOpt}>Feeding India</a>
                    <a href="" className={footerCss.boxOpt}>Hyperpure</a>
                    <a href="" className={footerCss.boxOpt}>Tomaland</a>
                </div>
                <div className={[footerCss.box3, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>FOR RESTAURANTS</div>
                    <a href="" className={footerCss.boxOpt}>Partner With Us</a>
                    <a href="" className={footerCss.boxOpt}>Apps For You</a>

                    <div className={footerCss.boxTtl}>FOR ENTERPRISES</div>
                    <a href="" className={footerCss.boxOpt}>Tomato For Work</a>
                </div>
                <div className={[footerCss.box4, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>LEARN MORE</div>
                    <a href="" className={footerCss.boxOpt}>Privacy</a>
                    <a href="" className={footerCss.boxOpt}>Security</a>
                    <a href="" className={footerCss.boxOpt}>Terms</a>
                    <a href="" className={footerCss.boxOpt}>Sitemap</a>
                </div>
                <div className={[footerCss.box5, footerCss.box].join(' ')}>
                    <div className={footerCss.boxTtl}>SOCIAL LINKS</div>
                    <div className={footerCss.socialImgs}>
                        <a href="" className={footerCss.socialImgAnchore} >
                            <img className={footerCss.socialImg} src={Facebook} alt="linkedin" />
                        </a>
                        <a href="" className={footerCss.socialImgAnchore} >
                            <img className={footerCss.socialImg} src={Linkedin} alt="instagram" />
                        </a>
                        <a href="" className={footerCss.socialImgAnchore} >
                            <img className={footerCss.socialImg} src={Instagram} alt="facebook" />
                        </a>
                        <a href="" className={footerCss.socialImgAnchore} >
                            <img className={footerCss.socialImg} src={Twitter} alt="twitter" />
                        </a>
                        <a href="" className={footerCss.socialImgAnchore} >
                            <img className={footerCss.socialImg} src={Youtube} alt="youtube" />
                        </a>
                    </div>
                    <a href='' className={footerCss.app}><img className={footerCss.appImg} src={Gstore} alt="google play store" /></a>
                    <a href='' className={footerCss.app}><img className={footerCss.appImg} src={Appstore} alt="apple app store" /></a>
                </div>
            </div>
            <hr className={footerCss.breakLine} />
            <div className={footerCss.sec3}>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Tomato™ Ltd. All rights reserved.
            </div>
        </div>
    </div>
}

export default Footer;