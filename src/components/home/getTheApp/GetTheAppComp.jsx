import getTheAppCss from './GetTheAppComp.module.css'

import MobileImg from '../../../../public/images/apps.png'
import Playstore from '../../../../public/images/playstore.png'
import Appstore from '../../../../public/images/appstore.png'

let GetTheApp = () => {
    return <div className={getTheAppCss.infoSec}>
        <div className={getTheAppCss.outerInfoSec}>
            <div className={getTheAppCss.firstSec}>
                <img className={getTheAppCss.phoneImg} src={MobileImg} alt="mobile" />
            </div>
            <div className={getTheAppCss.middleSec}>
                <div className={getTheAppCss.title}>Get the Zomato App</div>
                <div className={getTheAppCss.tag}>We will send you a link, open it on your phone to download the app</div>
                <div className={getTheAppCss.subscribe}>
                    <div className={getTheAppCss.radioOptions}>
                        <div className={getTheAppCss.opts}>
                            <input className={getTheAppCss.option} type="radio" name="option" id="emailOption" />
                            <label htmlFor="emailOption" className={getTheAppCss.label}>Email</label>
                        </div>
                        <div className={getTheAppCss.opts}>
                            <input className={getTheAppCss.option} type="radio" name="option" id="phoneOption" />
                            <label htmlFor="phoneOption" className={getTheAppCss.label}>Phone</label>
                        </div>
                    </div>
                    <div className={getTheAppCss.inputSec}>
                        <input className={getTheAppCss.inputBox} placeholder='Email' type="email" name="email" id="email" />
                        {/* <input className={getTheAppCss.inputBox} placeholder='type here...' type="tel" name="phone" id="phone" /> */}
                        <button className={getTheAppCss.btn}>Share App Link</button>
                    </div>
                </div>
                <div className={getTheAppCss.lastSec}>
                    <div className={getTheAppCss.downloadTxtTag}>Download App From</div>
                    <div className={getTheAppCss.downloadSec}>
                        <img className={getTheAppCss.storeImg} src={Playstore} alt="google play store" />
                        <img className={getTheAppCss.storeImg} src={Appstore} alt="apple app store" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default GetTheApp;