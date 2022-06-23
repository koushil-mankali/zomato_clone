import {useState} from 'react'

import css from './OrderHistory.module.css'

import orderonlineImg from '../../../../../public/images/orderonline.jpg'

import OrderHistoryCard from '../../../OrderHistoryCard/OrderHistoryCard'
import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const OrderHistory = () => {
    let [data, setData] = useState([
        {
            id:1,
            imgSrc: orderonlineImg,
            name:"",
            address:"",
            orderNum:"",
            items:[{
                itemName: "",
                qty:""
            }],
            orderedOn: "",
            itemTotal:"",
            coupon: {
                couponName:"",
                discount:""
            },
            taxesandcharges:"",
            totalSavings:"",
            grandTotal:"",
            paymentType:"",
            phoneNum:"",
            deliveredTo:"",
            fssaiNo:"",
            fav:"",
            summaryLinkId:""
        }
    ]);

    let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <OrderHistoryCard udata={item} key={item?.id} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
}

export default OrderHistory