import React from 'react'

import css from './MenuComponent.module.css'

import MenuCardImg from '/images/menucard.png'

import MenuCard from '../../../../../utils/Cards/RestaurantBodyCards/MenuCard/MenuCard'

const MenuComponent = () => {

  const menuCards = [
    {
      imgSrc: MenuCardImg,
      ttl: "Menu",
      pages: 23
    },
    {
      imgSrc: MenuCardImg,
      ttl: "Menu Card",
      pages: 12
    }
  ]

  return <div className={css.outerDiv}>
      <div className={css.ttl}>Krupa Mess & Tiffins Menu</div>
        <div className={css.menuCard}>
          {menuCards?.map((val, id) => {
            return <MenuCard key={id} imgSrc={val.imgSrc} ttl={val.ttl} pages={val.pages} />
          })}
        </div>
  </div>
}

export default MenuComponent