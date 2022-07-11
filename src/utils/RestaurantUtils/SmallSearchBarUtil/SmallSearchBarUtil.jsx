import React from 'react'

import css from './SmallSearchBarUtil.module.css'

import searchIcon from '/icons/search.png'

const SmallSearchBarUtil = ({placeholder}) => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.searchBox}>
        <img src={searchIcon} alt="cancel icon" className={css.srchIcon} />
        <input type="search" placeholder={placeholder} className={css.inpt} />
      </div>
    </div>
  </div>
}

export default SmallSearchBarUtil