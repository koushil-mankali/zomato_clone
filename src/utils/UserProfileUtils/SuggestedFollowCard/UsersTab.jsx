import {useState} from 'react'

import css from './SuggestedFollowCard.module.css'

import addUserImg from '/icons/add-user.png';
import friendImg from '/icons/friend.png';

const UsersTab = ({data}) => {
    let [follow, setFollow] = useState(false);

    return (
        <div className={css.userTab}>
            <div className={css.leftBox}>
                <div className={css.imgBox1}>
                    <img className={css.profileImg} src={data?.imgSrc} alt='profile picture' />
                </div>
                <div className={css.userData}>
                    <div className={css.userName}>{data?.userName}</div>
                    <div className={css.userDet}>
                        <span className={css.txtBox}><span className={css.count}>{data?.reviews}</span> <span className={css.txt1}>Reviews</span></span>
                        <span className={css.dot}></span>
                        <span className={css.txtBox}><span className={css.count}>{data?.followers}</span> <span className={css.txt2}>Followers</span></span>
                    </div>
                </div>
            </div>
            <div className={css.imgBox2}>
                <img className={css.followImg} src={follow ? friendImg : addUserImg} alt='follow icon' onClick={() => setFollow(val => !val)} />
            </div>
        </div>
    )
}

export default UsersTab