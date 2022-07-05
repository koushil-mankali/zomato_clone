import React from 'react'

import css from './RedBtnHov.module.css'

const RedBtnHov = (props) => {
  const {txt, ...restProps} = props;
  return (
    <div className={css.btn} {...restProps}>{txt}</div>
  )
}

export default RedBtnHov