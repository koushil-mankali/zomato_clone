import { useState } from "react";

import css from "./OrderHistoryCard.module.css";

import OrderDetails from '../../../Modals/OrderDetailsModal/OrderDetails'

const OrderHistoryCard = ({ udata, setViewDet, setOrderId }) => {
  const {
    id,
    imgSrc,
    name,
    address,
    orderNum,
    items,
    orderedOn,
    itemTotal,
    coupon,
    taxesandcharges,
    totalSavings,
    grandTotal,
    paymentType,
    orderStatus,
    phoneNum,
    deliveredTo,
    fssaiNo,
    fav,
    summaryLinkId,
  } = udata;

  return (
    <>
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.topBar}>
            <div className={css.leftHead}>
              <div className={css.imgBox}>
                <img className={css.img} src={imgSrc} alt="Picture" />
              </div>
              <div className={css.det}>
                <div className={css.name}>{name}</div>
                <div className={css.address}>{address}</div>
              </div>
            </div>
            <div className={css.status}>{orderStatus}</div>
          </div>
          <div className={css.midBar}>
            <div className={css.txtBox}>
              <div className={css.titleTxt}>ORDER NUMBER</div>
              <div className={css.vlaTxt}>{orderNum}</div>
            </div>
            <div className={css.txtBox}>
              <div className={css.titleTxt}>TOTAL AMOUNT</div>
              <div className={css.vlaTxt}>₹ {grandTotal}</div>
            </div>
            <div className={css.txtBox}>
              <div className={css.titleTxt}>ITEMS</div>
              {items?.map((val,i) => {
                return <div className={css.itemDet} key={i}>
                  <span className={css.qtyTxt}>{val?.qty}</span>
                  <span className={css.cross}>X</span>
                  <div className={css.vlaTxt}>{val?.itemName}</div>
                </div>;
              })}
            </div>
            <div className={css.txtBox}>
              <div className={css.titleTxt}>ORDERED ON</div>
              <div className={css.vlaTxt}>{orderedOn}</div>
            </div>
          </div>
          <div className={css.footerBar}>
            <button
              className={css.viewBtn}
              onClick={() => {setViewDet((val) => !val); setOrderId(id)}}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryCard;
