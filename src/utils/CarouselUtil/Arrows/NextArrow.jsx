import React from 'react'

import nextIcon from '/icons/next.png'

const NextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <img className={className}
    style={{ ...style}}
    onClick={onClick} src={nextIcon} />
  )
}

export default NextArrow