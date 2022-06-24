import { useState } from 'react';
import { createPortal } from 'react-dom'

import closeBtn from '/images/closeBtn.jpg';
import orderonlineImg from '/images/orderonline.jpg'
import downloadIcon from '/icons/download.png'
import heartO from '/icons/heartO.png'
import heartF from '/icons/heartF.png'
import vegIcon from '/icons/veg.png'
import nonvegIcon from '/icons/nonveg.png'

import css from './OrderDetails.module.css'

let OrderDetails = ({setViewDet}) => {

    let [like, setLike] = useState(false);

    let data = {
        imgSrc:orderonlineImg,
    }

    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.headerLeft}>
                    <div className={css.title}>Order Details</div>
                    <div className={css.headerDet}>
                        <div className={css.imgBox}>
                            <img className={css.img} src={data.imgSrc} alt="picture" />
                        </div>
                        <div className={css.txtContent}>
                            <div className={css.ttl}>Paradise Biryani</div>
                            <div className={css.address}>kukatpall, Hyd</div>
                        </div>
                    </div>
                    <div className={css.ttlr}>Download summary <div className={css.icon}><img className={css.iconImg} src={downloadIcon} alt='download icon' /></div></div>
                </div>
                <span className={css.closeBtn} onClick={() => setViewDet(val => !val)}>
                    <img className={css.closeBtnImg} src={closeBtn} alt="close button" />
                </span>
            </div>
            <div className={css.body}>
                <div className={css.statusBar}>This order was delivered</div>
                <div className={css.orders}>
                    <div className={css.orderTxt}>Your Order</div>
                    <div className={css.order}>
                        <div className={css.foodTypeImgBox}>
                            <img className={css.foodTypeImg} src={vegIcon} alt="food type icon" />
                        </div>
                        <div className={css.orderTtlBox}>
                            <div className={css.orderTtl}>Coke Pet - 750 Ml</div>
                            <div className={css.orderPrice}>
                                <div className={css.leftPrice}>
                                    <span className={css.qty}>1</span>
                                    <span className={css.priceTxt}>X ₹149</span>
                                </div>
                                <div className={css.rightPrice}>
                                    <span className={css.priceTxt}>₹149.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.order}>
                        <div className={css.foodTypeImgBox}>
                            <img className={css.foodTypeImg} src={vegIcon} alt="food type icon" />
                        </div>
                        <div className={css.orderTtlBox}>
                            <div className={css.orderTtl}>Coke Pet - 750 Ml</div>
                            <div className={css.orderPrice}>
                                <div className={css.leftPrice}>
                                    <span className={css.qty}>1</span>
                                    <span className={css.priceTxt}>X ₹149</span>
                                </div>
                                <div className={css.rightPrice}>
                                    <span className={css.priceTxt}>₹149.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.footer}>
                <div className={css.fav}>
                    <div className={css.favImg}>
                        {like ? <img className={css.likedImg} src={heartO} alt='liked icon' />
                         : <img className={css.likedImg} src={heartF} alt='liked icon' />}
                    </div>
                    <div className={css.favTxt} onClick={() => setLike(val => !val)}>Mark as Favorite</div>
                </div>
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default OrderDetails;