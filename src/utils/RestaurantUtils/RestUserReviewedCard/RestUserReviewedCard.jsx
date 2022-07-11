import {useState} from 'react'

import css from './RestUserReviewedCard.module.css'

import downArrowImg from '/icons/down-arrow.png'
import starImg from '/icons/star.png'
import shareImg from '/icons/share.png'
import likeImg from '/icons/like.png'
import likedImg from '/icons/liked.png'
import comment from '/icons/message.png'
import close from '/icons/close.png'

import RatingNumberBox from '../RatingNumberBox/RatingNumberBox'
import WhiteBtnHov from '../../Buttons/WhiteBtnHov/WhiteBtnHov'
import RedBtnHov from '../../Buttons/RedBtnHov/RedBtnHov'

const RestUserReviewedCard = (props) => {
    let {imgSrc, title, address, reviews, followers, stars, days, votes, comments, id, userImg} = props?.data;
    let [alertBoxCss, setAlertBoxCss] = useState([css.alertBox, css.dnone].join(' '));
    let [liked, setLiked] = useState(false);
    let [toggleDropDown, setToggleDropDown] = useState(false);
    let [toggleCommentBox, setToggleCommentBox] = useState(false);
    let [following, setFollowing] = useState(false);

    let toggleDropdown = () => {
        setToggleDropDown(val=>!val);
    }

    let shareURL = () => {
        navigator.clipboard.writeText(document.URL);
        setAlertBoxCss(css.alertBox);
        setTimeout(() => {
            setAlertBoxCss([css.alertBox, css.dnone].join(' '));
        }, 5000)
    }

    let closeAlert = () => {
        setAlertBoxCss([css.alertBox, css.dnone].join(' '));
    }

  return (
    <>
    <div className={alertBoxCss}><span>Review link copied to clipboard</span> <span onClick={closeAlert}><img src={close} alt='close button' className={css.closeImg}  /></span></div>
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.sec1}>
                <div className={css.leftBox}>
                    <div className={css.imgBox}><img className={css.hotelImg} src={imgSrc} alt='hotel image' /></div>
                    <div className={css.txtBox1}>
                        <div className={css.title}>{title}</div>
                        <div className={css.det}>
                            <div className={css.userDet}>{reviews} Reviews</div>
                            <div></div>
                            <div className={css.userDet}>{followers} Followers</div>
                        </div>
                    </div>
                </div>
                <div className={css.rightBox}>
                    {!following ? <WhiteBtnHov txt="Follow" onClick={() => setFollowing(true)} /> : <RedBtnHov txt="Following" onClick={() => setFollowing(false)} /> }
                </div>
            </div>
            <div  className={css.sec}>
                <span className={css.delivery}> <RatingNumberBox stars={stars} txt={stars} iconR={false} isActive={true} /> <span className={css.delTxt}>Delivery</span></span>
                <span className={css.days}>{days} days</span>
            </div>
            <div className={css.sec}>
                <div className={css.txt}>{votes} Votes for helpful, {comments} Comments</div>
            </div>
            <div className={css.sec}>
                <div className={css.txtBox2} onClick={() => setLiked(val => !val)}>
                    <img src={liked ? likedImg : likeImg} alt='thumbs up' className={css.icon} />
                    <span className={css.txt2}>Helpful</span>
                </div>
                <div className={css.txtBox2} onClick={() => setToggleCommentBox(val => !val)}>
                    <img src={comment} alt='comment' className={css.icon} />
                    <span className={css.txt2}>Comment</span>
                </div>
                <div className={css.txtBox2} onClick={shareURL}>
                    <img src={shareImg} alt='share' className={css.icon} />
                    <span className={css.txt2}>Share</span>
                </div>
            </div>
        </div>
    </div>
    {toggleCommentBox ? <div className={css.commentBox}>
        <div className={css.userImgBox}><img src={userImg} className={css.userImg} alt="user profile pic" /></div>
        <div className={css.inputBox}><input type='text' className={css.inptTxtBox} placeholder="Write your comment" /></div>
    </div>: null}
    </>
  )
}

export default RestUserReviewedCard