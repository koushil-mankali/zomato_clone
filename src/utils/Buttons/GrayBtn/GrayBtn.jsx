import React from 'react'

import css from './GrayBtn.module.css'

const GrayBtn = (props) => {
  const {txt, ...restProps} = props;
  return (
    <div className={css.btn} {...restProps}>{txt}</div>
  )
}

export default GrayBtn