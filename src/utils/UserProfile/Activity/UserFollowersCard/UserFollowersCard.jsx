import { useState } from "react";

import css from "./UserFollowersCard.module.css";

import happyHoursImg from "../../../../../public/images/happyhours.jpg";

import UserDetCard from "../../../UserDetCard/UserDetCard";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const UserFollowersCard = ({ hashId, userData }) => {
  let {followers, following} = userData;
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 2,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 3,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 4,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 5,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 6,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 7,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 8,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 9,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 10,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 11,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 12,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 13,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 14,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      <div className={css.btns}>
        <div className={css.btn1}>Following <span className={css.count}>({following})</span></div>
        <div className={css.btn2}>Followers <span className={css.count}>({followers})</span></div>
      </div>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <UserDetCard imgSrc={item.imgSrc} name={item.name} key={item.id} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserFollowersCard;
