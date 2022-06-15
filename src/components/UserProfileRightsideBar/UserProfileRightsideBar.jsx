import {useParams } from 'react-router-dom'

import css from './UserProfileRightsideBar.module.css'

import UserReviewedCard from '../../utils/UserReviewedCard/UserReviewedCard'

let UserProfileRightsideBar = () => {

    let {userId, hashId} = useParams(); 

    console.log(userId, hashId, "user and hash id");

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Reviews</div>
            <dvi className={css.contectBox}>
                    <UserReviewedCard />
            </dvi>
        </div>
    </div>
}

export default UserProfileRightsideBar