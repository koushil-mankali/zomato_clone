import { useState } from "react";

import css from "./UserFollowersCard.module.css";

import happyHoursImg from "../../../../public/images/happyhours.jpg";

import UserDetCard from "../../UserDetCard/UserDetCard";

import UserProfileNoData from "../UserProfileNoData/UserProfileNoData";

const UserFollowersCard = ({ hashId, userData }) => {
  let {followers, following} = userData;
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "prabhu"
    },
    {
      id: 1,
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
            return <UserDetCard imgSrc={item.imgSrc} name={item.name} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserFollowersCard;
