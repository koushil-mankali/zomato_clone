import {useState} from 'react'
import {NavLink, useParams} from "react-router-dom"

import css from './OrderBodyComponent.module.css'

const OrderBodyComponent = () => {

    const {city, hotel} = useParams();

    const isActiveClass = (e) => {
        if(e?.isActive){
            return [css.menuTxt, css.menuTxtActive].join(" ");
        }else{
            return css.menuTxt;
        }
    }

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.menu}>
            <NavLink to={`/${city}/${hotel}/`} className={isActiveClass}>
                Overview
            </NavLink>
            <NavLink to={`/${city}/${hotel}/order`} className={isActiveClass}>
                Order Online
            </NavLink>
            <NavLink to={`/${city}/${hotel}/reviews`} className={isActiveClass}>
                Reviews
            </NavLink>
            <NavLink to={`/${city}/${hotel}/photos`} className={isActiveClass}>
                Photos
            </NavLink>
            <NavLink to={`/${city}/${hotel}/menu`} className={isActiveClass}>
                Menu
            </NavLink>
        </div>
        <div className={css.componentsBody}>

        </div>
    </div>  
  </div>
}

export default OrderBodyComponent