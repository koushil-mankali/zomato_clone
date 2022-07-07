import React from 'react'

import css from './DownloadAppUtil.module.css'

import ZomatoDownloadApp from '/images/ZomatoDownloadApp.png'

function DownloadAppUtil({setModal}) {
  return <div className={css.outerDiv} onClick={() => console.log("Modal")}>
    <div className={css.left}>
        <div className={css.txt}>Online ordering is only supported on the mobile app</div>
        <div className={css.btnTxt}>Download the App</div>
    </div>
    <div className={css.right}>
        <img src={ZomatoDownloadApp} alt="Download app image"  className={css.img} />
    </div>
  </div>
}

export default DownloadAppUtil