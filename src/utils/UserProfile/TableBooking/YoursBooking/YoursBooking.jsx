import { useState } from 'react';

import css from './YoursBooking.module.css'

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

import WhiteButton from '../../../Buttons/WhiteButton/WhiteButton'
import RedButton from '../../../Buttons/RedButton/RedButton'

const YoursBooking = ({hashId}) => {

    let [isData, setIsData] = useState(true)

    let data = [
        {
            id: 1,
            title: "Hostel",
            address: "Dilshuk Nagar, Hyderabad",
        },
        {
            id:2,
            title: "Hostel2",
            address: "Manjeera Trinity, Kukatpally, Hyderabad",
        }
    ]

  return (<div className={css.outerDiv}>
  {isData ? (
    <>
        <div className={css.btns}>  
            <RedButton  txt="Past" count="0" />
            <WhiteButton txt="Upcoming" count="0" />
        </div>
    </>
  ) : (
    <UserProfileNoData hashId={hashId} />
  )}
</div>);
}

export default YoursBooking