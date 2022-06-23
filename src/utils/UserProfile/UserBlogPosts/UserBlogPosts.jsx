import { useState } from "react";

import css from "./UserBlogPosts.module.css";

import happyHoursImg from "../../../../public/images/happyhours.jpg";

import BlogPostCard from "../../BlogPostCard/BlogPostCard";

import UserProfileNoData from "../UserProfileNoData/UserProfileNoData";

const UserBlogPosts = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "Paradise Biryani",
      time: new Intl.DateTimeFormat().format(new Date())?.toString(),
      link: "#"
    },
    {
      id: 2,
      imgSrc: happyHoursImg,
      name: "Koushil Mankali",
      time: new Intl.DateTimeFormat().format(new Date())?.toString(),
      link: "#"
    }
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <BlogPostCard udata={item} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default UserBlogPosts;
