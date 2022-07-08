import React from 'react'

import css from './SmallSearchBarUtil.module.css'

const SmallSearchBarUtil = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.searchBox}>
        <img src="" alt="cancel icon" />
        <input type="search" placeholder="Search within menu" />
        <img src="" alt="search icon" />
      </div>
    </div>
  </div>
}

export default SmallSearchBarUtil