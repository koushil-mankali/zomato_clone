import { useState, useEffect } from 'react'

import css from './UserProfileNoData.module.css'

import {reviewPage, photosPage, followersPage, recentlyviewedPage, bookmarksPage, blogpostsPage, orderhistoryPage, myaddressPage, favoriteordersPage, bookingsPage} from '../../helpers/constants'

import photos from '../../../public/icons/nophotos.png'
import blogpost from '../../../public/icons/noblogposts.png'
import bookmarks from '../../../public/icons/nobookmarks.png'
import favorders from '../../../public/icons/nofavorders.png'
import reservations from '../../../public/icons/noreservations.png'
import followers from '../../../public/icons/nofollowers.png'

const UserProfileNoData = ({hashId}) => {

  let [page, setPage] = useState("no Data")

  useEffect(() => {
    switch(hashId){
      case reviewPage: 
        setPage(<div className={css.imgBox}>
          <img src={photos} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case photosPage: 
        setPage(<div className={css.imgBox}>
          <img src={photos} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case followersPage: 
        setPage(<div className={css.imgBox}>
          <img src={followers} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case recentlyviewedPage: 
        setPage(<div className={css.imgBox}>
          <img src={photos} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case bookmarksPage: 
        setPage(<div className={css.imgBox}>
          <img src={bookmarks} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case blogpostsPage: 
        setPage(<div className={css.imgBox}>
          <img src={blogpost} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case orderhistoryPage: 
        setPage(<div className={css.imgBox}>
          <img src={reservations} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case myaddressPage: 
        setPage(<div className={css.imgBox}>
          <img src={reservations} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      case favoriteordersPage: 
        setPage(<div className={css.imgBox}>
          <img src={favorders} className={css.img} />
          <div className={css.txt}>No Data Found!</div>
        </div>)
        break;
      default: null
    }
  }, [hashId]);

  return (
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          {page}
        </div>
    </div>
  )
}

export default UserProfileNoData