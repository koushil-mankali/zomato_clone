import { useState } from "react";

import css from "./UserPhotosCard.module.css";

import happyHoursImg from "/images/happyhours.jpg";

import SmallCardImg from "../../../../Cards/card6/SmallCardImg";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const UserPhotosCard = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
    },
    {
      id: 2,
      imgSrc: happyHoursImg,
    },
    {
      id: 3,
      imgSrc: happyHoursImg,
    },
    {
      id: 4,
      imgSrc: happyHoursImg,
    },
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <SmallCardImg imgSrc={item.imgSrc} key={item.id} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserPhotosCard;
