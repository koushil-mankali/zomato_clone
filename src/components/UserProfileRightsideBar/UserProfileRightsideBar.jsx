import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom'

import css from './UserProfileRightsideBar.module.css'

import {reviewPage, photosPage, followersPage, recentlyviewedPage, bookmarksPage, blogpostsPage, orderhistoryPage, myaddressPage, favoriteordersPage, bookingsPage} from '../../helpers/constants'

import ImgSrc from '../../../public/images/proandproplus.jpg';

import UserReviewedCard from '../../utils/UserReviewedCard/UserReviewedCard'

let UserProfileRightsideBar = () => {

    let [currComp, setCurrComp] = useState(<h1>Some thing Went Wrong!</h1>);

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

   useEffect(() => {
    switch(hashId){
        case photosPage:
            setCurrComp(<h1>No photos!</h1>);
            break;
        case followersPage:
            setCurrComp(<h1>No followersPage!</h1>);
            break;
        case recentlyviewedPage:
            setCurrComp(<h1>No recentlyviewedPage!</h1>);
            break;
        case bookmarksPage:
            setCurrComp(<h1>No bookmarksPage!</h1>);
            break;
        case blogpostsPage:
            setCurrComp(<h1>No blogpostsPage!</h1>);
            break;
        case orderhistoryPage:
            setCurrComp(<h1>No orderhistoryPage!</h1>);
            break;
        case myaddressPage:
            setCurrComp(<h1>No myaddressPage!</h1>);
            break;
        case favoriteordersPage:
            setCurrComp(<h1>No PagavoriteordersPagee!</h1>);
            break;
        case bookingsPage:
            setCurrComp(<h1>No bookingsPage!</h1>);
            break;
        default:
            setCurrComp(data?.map((val, index) => {
                return <UserReviewedCard data={val} key={index}/>
            }))
    }
    console.log(hashId, photosPage)
   }, [hashId])
   

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Reviews</div>
            <div className={css.contectBox}>
                { currComp }
            </div>
        </div>
    </div>
}

export default UserProfileRightsideBar