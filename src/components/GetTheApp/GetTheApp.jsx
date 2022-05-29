import { useState } from 'react'

import css from './GetTheApp.module.css'

import mobileImg from '../../../public/images/mobile.png'
import playstoreImg from '../../../public/icons/appstore.png'
import appstoreImg from '../../../public/icons/playstore.png'

let GetTheApp = () => {

    let [inputType, setInpuutType] = useState(true);

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.leftSec}>
                <img className={css.mobileImg} src={mobileImg} alt="mobile img" />
            </div>
            <div className={css.rightSec}>
                <div className={css.title}>Get the Tomato App</div>
                <div className={css.tag}>We will send you a link, open it on your phone to download the app</div>
                <div className={css.inputBoxes}>
                    <div className={css.radiosBtns}>
                        <div className={css.radioBtn} onClick={() => setInpuutType(true)}>
                            <input className={css.radio} type="radio" name="radio" id="email" checked={inputType} />
                            <label className={css.label} htmlFor="email">email</label>
                        </div>
                        <div className={css.radioBtn} onClick={() => setInpuutType(false)}>
                            <input className={css.radio} type="radio" name="radio" id="phone" />
                            <label className={css.label} htmlFor="phone">phone</label>
                        </div>
                    </div>
                    <div className={css.inputs}>
                        <div className={css.optionInputs}>
                            {inputType ? <div className={css.inputBox}>
                                <input className={css.input} type="email" name="" id="" />
                                <div className={css.errMess}>Please enter your email id</div>
                            </div> : <div className={css.inputBox}>
                                <input className={css.input} type="tel" name="" id="" />
                                <div className={css.errMess}>Please enter your phone number</div>
                            </div>}
                        </div>
                        <button className={css.btn}>Share App Link</button>
                    </div>
                </div>
                <div className={css.appLinks}>
                    <div className={css.title2}>Download app from</div>
                    <div className={css.appBoxes}>
                        <img className={css.appImg} src={appstoreImg} alt="appstore" />
                        <img className={css.appImg} src={playstoreImg} alt="playstore" />
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default GetTheApp;