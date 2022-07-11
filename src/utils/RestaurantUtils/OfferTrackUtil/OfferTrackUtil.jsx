import React from 'react'

import css from './OfferTrackUtil.module.css'

const OfferTrackUtil = (props) => {
  const {txt1, txt2, ...restProps} = props;
  return <div className={css.outerDiv} {...restProps}>
    <div className={css.txtB}>{txt1}</div>
    <div className={css.txt}>{txt2}</div>
  </div>
}

export default OfferTrackUtil