import React from 'react'

import css from './RedBtnHovWithIcon.module.css'

const RedBtnHovWithIcon = (props) => {
  const {txt, icon, ...restProps} = props;
  return <div className={css.btn} {...restProps}>
    <div className={css.iconBox}><img src={icon} alt="icon" className={css.icon} /></div>
    <div className={css.txt}>{txt}</div>
  </div>
}

export default RedBtnHovWithIcon