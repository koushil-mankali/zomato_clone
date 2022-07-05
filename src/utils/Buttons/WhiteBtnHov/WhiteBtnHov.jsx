import React from 'react'

import css from './WhiteBtnHov.module.css'

const WhiteBtnHov = (props) => {
  const {txt, ...restProps} = props;
  return (
    <div className={css.btn} {...restProps}>{txt}</div>
  )
}

export default WhiteBtnHov