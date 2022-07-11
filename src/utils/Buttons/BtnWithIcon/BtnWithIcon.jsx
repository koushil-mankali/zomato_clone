import React from 'react'

import css from './BtnWithIcon.module.css'

const BtnWithIcon = (props) => {
  const {txt, icon, bgColor, ...restProps} = props;
  return <div className={css.outerDiv}>
    <div className={css.innerDiv} {...restProps}>
        <div className={css.iconBox}><img src={icon} alt="icon" className={css.icon} /></div>
        <div className={css.txt}>{txt}</div>
    </div>
  </div>
}

export default BtnWithIcon