import React from "react";

import css from "./OrderHistoryCard.module.css";

const OrderHistoryCard = ({ data }) => {
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
    phoneNum,
    deliveredTo,
    fssaiNo,
    fav,
    summaryLinkId,
  } = data;
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        
      </div>
    </div>
  );
};

export default OrderHistoryCard;