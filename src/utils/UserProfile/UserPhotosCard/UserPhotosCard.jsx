import { useState } from "react";

import css from "./UserPhotosCard.module.css";

import happyHoursImg from "../../../../public/images/happyhours.jpg";

import SmallCardImg from "../../card6/SmallCardImg";

import UserProfileNoData from "../UserProfileNoData/UserProfileNoData";

const UserPhotosCard = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
    },
  ]);
  let [isData, setIsData] = useState(false);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <SmallCardImg imgSrc={item.imgSrc} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserPhotosCard;
