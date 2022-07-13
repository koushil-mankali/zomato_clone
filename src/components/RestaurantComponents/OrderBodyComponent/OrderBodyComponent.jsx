import {useState, useEffect} from 'react'
import {NavLink, useParams} from "react-router-dom"

import css from './OrderBodyComponent.module.css'

import OverviewFieldComponent from './Components/OverviewFieldComponent/OverviewFieldComponent'
import OrderOnlineFieldComponent from './Components/OrderOnlineFieldComponent/OrderOnlineFieldComponent'
import PhotosComponent from './Components/PhotosComponent/PhotosComponent'
import ReviewsComponent from './Components/ReviewsComponent/ReviewsComponent'
import MenuComponent from './Components/MenuComponent/MenuComponent'

const OrderBodyComponent = () => {

    const [pageCompo, setPageComp] = useState("")

    const {city, hotel, page=""} = useParams();

    const isActiveClass = (e) => {
        if(e?.isActive){
            return [css.menuTxt, css.menuTxtActive].join(" ");
        }else{
            return css.menuTxt;
        }
    }

    useEffect(()=> {
        switch(`/${city}/${hotel}/${page}`){
            case `/${city}/${hotel}/`:
                setPageComp(<OverviewFieldComponent />);
                break;
            case `/${city}/${hotel}/order`:
                setPageComp(<OrderOnlineFieldComponent />);
                break;
            case `/${city}/${hotel}/reviews`:
                setPageComp(<ReviewsComponent />);
                break;
            case `/${city}/${hotel}/photos`:
                setPageComp(<PhotosComponent />);
                break;
            case `/${city}/${hotel}/menu`:
                setPageComp(<MenuComponent />);
                break;
            default: 
                setPageComp(<OverviewFieldComponent />);
        }
    }, [city, hotel, page])


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
            {pageCompo}
        </div>
    </div>  
  </div>
}

export default OrderBodyComponent