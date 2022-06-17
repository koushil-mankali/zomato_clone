import { useState, useEffect } from 'react'

import css from './UserProfileNoData.module.css'

import {reviewPage, photosPage, followersPage, recentlyviewedPage, bookmarksPage, blogpostsPage, orderhistoryPage, myaddressPage, favoriteordersPage, bookingsPage} from '../../../helpers/constants'

import photos from '../../../../public/icons/nophotos.png'
import blogpost from '../../../../public/icons/noblogposts.png'
import bookmarks from '../../../../public/icons/nobookmarks.png'
import favorders from '../../../../public/icons/nofavorders.png'
import reservations from '../../../../public/icons/noreservations.png'
import followers from '../../../../public/icons/nofollowers.png'

const UserProfileNoData = ({hashId}) => {

  let [page, setPage] = useState(photos)

  useEffect(() => {
    switch(hashId){
      case reviewPage: 
        setPage(photos)
        break;
      case photosPage: 
        setPage(photos)
        break;
      case followersPage: 
        setPage(followers)
        break;
      case recentlyviewedPage: 
        setPage(photos)
        break;
      case bookmarksPage: 
        setPage(bookmarks)
        break;
      case blogpostsPage: 
        setPage(blogpost)
        break;
      case orderhistoryPage: 
        setPage(reservations)
        break;
      case myaddressPage: 
        setPage(reservations)
        break;
      case favoriteordersPage: 
        setPage(favorders)
        break;
      default: null
    }
  }, [hashId]);

  return (
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.imgBox}>
            <img src={page} className={css.img} />
            <div className={css.txt}>Nothing here yet!</div>
          </div>
        </div>
    </div>
  )
}

export default UserProfileNoData