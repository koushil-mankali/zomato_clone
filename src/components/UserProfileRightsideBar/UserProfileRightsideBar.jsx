import {useParams } from 'react-router-dom'

import css from './UserProfileRightsideBar.module.css'

import ImgSrc from '../../../public/images/proandproplus.jpg';

import UserReviewedCard from '../../utils/UserReviewedCard/UserReviewedCard'

let UserProfileRightsideBar = () => {

    let {userId, hashId} = useParams(); 

    let data = [{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },
    {
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    }]

    console.log(userId, hashId, "user and hash id");

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Reviews</div>
            <div className={css.contectBox}>
                {data?.map(val => {
                    return <UserReviewedCard data={val} />
                })}
            </div>
        </div>
    </div>
}

export default UserProfileRightsideBar