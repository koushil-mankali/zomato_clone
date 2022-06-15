import {useState} from 'react'

import css from './UserReviewedCard.module.css'

import downArrowImg from '../../../public/icons/down-arrow.png'
import starImg from '../../../public/icons/star.png'
import shareImg from '../../../public/icons/share.png'
import likeImg from '../../../public/icons/like.png'
import likedImg from '../../../public/icons/liked.png'
import comment from '../../../public/icons/message.png'

const UserReviewedCard = ({imgSrc, title, address, stars, days, votes, comments, id}) => {
    let [liked, setLiked] = useState(false);
    let [toggleCommentBox, setToggleCommentBox] = useState(false);

    console.log(toggleCommentBox, 'toggleCommentBox');

  return (
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.sec1}>
                <div className={css.leftBox}>
                    <div className={css.imgBox}><img className={css.hotelImg} src={imgSrc} alt='hotel image' /></div>
                    <div className={css.txtBox}>
                        <div className={css.title}>{title}</div>
                        <div className={css.address}>{address}</div>
                    </div>
                </div>
                <div className={css.rightBox}>
                    <div className={css.downArrow}><img className={css.downArrowImg} src={downArrowImg} alt='down arrow' /></div>
                    <div className={css.dropDown}>
                        <div className={css.opt}>Edit</div>
                        <div className={css.opt}>Delete</div>
                    </div>
                </div>
            </div>
            <div  className={css.sec}>
                <span className={css.delivery}> <div className={css.starDiv}>{stars} <img src={starImg} className={css.starIcon} alt='star' /></div> Delivery</span>
                <span className={css.days}>{days} days</span>
            </div>
            <div className={css.sec}>
                <div className={css.txt}>{votes} Votes for helpful, {comments} Comments</div>
            </div>
            <div className={css.sec}>
                <div className={css.txtBox}>
                    <img src={liked ? likedImg : likeImg} alt='thumbs up' className={css.icon} onClick={() => setLiked(val => !val)}/>
                    <span className={css.txt2}>Helpful</span>
                </div>
                <div className={css.txtBox} onClick={() => setToggleCommentBox(val => !val)}>
                    <img src={comment} alt='comment' className={css.icon} />
                    <span className={css.txt2}>Comment</span>
                </div>
                <div className={css.txtBox}>
                    <img src={shareImg} alt='share' className={css.icon} />
                    <span className={css.txt2}>Share</span>
                </div>
            </div>
            {toggleCommentBox ? <div className={css.commentBox}>
                <div><img /></div>
                <div><input type='text' /></div>
            </div>: null}
        </div>
    </div>
  )
}

export default UserReviewedCard