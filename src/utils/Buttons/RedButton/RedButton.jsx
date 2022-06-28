import React from 'react'

import css from './RedButton.module.css'

const RedButton = ({txt, count}) => {
  return (
    <div className={css.btn}>{txt} <span className={css.count}>({count})</span></div>
  )
}

export default RedButton