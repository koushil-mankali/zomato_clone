import React from 'react'
import {Link} from 'react-router-dom'

import css from './BlogPostCard.module.css'

const BlogPostCard = ({udata}) => {
  const {imgSrc, id, name, time,link} =udata;

  return (
    <Link to={link} className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img src={imgSrc} alt={name + "picture"} className={css.img}/>
            </div>
            <div className={css.txt}>
              <div className={css.name}>{name}</div>
              <div className={css.time}>Posted: {time}</div>
            </div>
        </div>
    </Link>
  )
}

export default BlogPostCard