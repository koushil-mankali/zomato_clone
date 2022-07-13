import React from 'react'
import {Link} from 'react-router-dom'

import css from './LabelUtil.module.css'

const LabelUtil = ({txt, link = "/"}) => {
  return <Link to={link} className={css.outerDiv}>
    <div className={css.label}>{txt}</div>
  </Link>
}

export default LabelUtil