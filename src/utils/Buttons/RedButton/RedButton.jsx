import React from 'react'

import css from './RedButton.module.css'

const RedButton = (props) => {
  const {txt, count, ...restProps} = props

  return (
    <div className={css.btn} {...restProps}>{txt} <span className={css.count}>({count})</span></div>
  )
}

export default RedButton