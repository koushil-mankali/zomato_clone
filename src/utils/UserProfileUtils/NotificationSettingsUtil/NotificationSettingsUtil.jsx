import React from 'react'

import css from './NotificationSettingsUtil.module.css'

const NotificationSettingsUtil = (props) => {
  
  const {txt, tag, push = false, email = false, whatsapp = false, ...restProps} = props;

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.left}>
        <div className={css.ttl}>{txt}</div>
        <div className={css.tag}>{tag}</div>
      </div>
      <div className={css.right}>
        <div className={css.switchCheck}>ssw</div>
      </div>
    </div>
  </div>
}

export default NotificationSettingsUtil