import React from 'react'

import css from './Pagination.module.css'

import rightArrowIcon from '/icons/right-arrow1.png'

const Pagination = ({page, size, total}) => {
  return <div className={css.pagination}>
        <div className={css.txt}>Showing {page}-{page*size} of {total} orders</div>
        <div className={css.nums}>
            {+total > 30 ? 
                <>
                    <div className={[css.count, css.active]?.join(" ")}>1</div>
                    <div className={css.count}>2</div>
                    <div className={css.count}>3</div>
                </>
                : +total > 10 ? 
                <>
                    <div className={[css.count, css.active]?.join(" ")}>1</div>
                    <div className={css.count}>2</div>
                </>
                 :
                    <div className={css.count}>1</div>
            }
            <div className={css.imgBox}><img className={css.img} src={rightArrowIcon} alt='right arrow' /></div>
        </div>
    </div>
}

export default Pagination