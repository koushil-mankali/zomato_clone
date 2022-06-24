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
                                    <span className={css.priceTxt}>X ₹38</span>
                                </div>
                                <div className={css.rightPrice}>
                                    <span className={css.priceTxt}>₹38.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.order}>
                        <div className={css.foodTypeImgBox}>
                            <img className={css.foodTypeImg} src={nonvegIcon} alt="food type icon" />
                        </div>
                        <div className={css.orderTtlBox}>
                            <div className={css.orderTtl}>Chiken Biryani - 500mg</div>
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
                <div className={css.calArea}>
                    <div className={css.orderCalcDet}>
                        <div className={css.leftTxt}>Item Total</div>
                        <div className={css.rightTxt}>₹187.00</div>
                    </div>
                    <div className={[css.orderCalcDet, css.couponTxt]?.join(" ")}>
                        <div className={css.leftTxt}>Coupon - (TASTY)</div>
                        <div className={css.rightTxt}>you saved ₹74.50</div>
                    </div>
                    <div className={css.orderCalcDet}>
                        <div className={css.leftTxt}>Taxes & charges</div>
                        <div className={css.rightTxt}>₹30.19</div>
                    </div>
                    <div className={[css.orderCalcDet, css.savings]?.join(" ")}>
                        <div className={css.leftTxt}>Your total savings</div>
                        <div className={css.rightTxt}>₹74.50</div>
                    </div>
                    <hr className={css.hr} />
                    <div className={css.orderCalcDet}>
                        <div className={css.leftTxt}>Grand Total</div>
                        <div className={css.rightTxt}>₹171.68</div>
                    </div>
                </div>
            </div>
            <div className={css.footer}>
                <div className={css.fav} onClick={() => setLike(val => !val)}>
                    <div className={css.favImg}>
                        {like ? <img className={css.likedImg} src={heartO} alt='liked icon' />
                         : <img className={css.likedImg} src={heartF} alt='liked icon' />}
                    </div>
                    <div className={css.favTxt}>
                        {like ? "Mark as Favorite" :  "Remove from Favorites"}
                    </div>
                </div>
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default OrderDetails;