import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './CategorySelectionComp.module.css'

import { orderOnlinePage, diningOutPage, proAndProPlusPage, nightLifePage } from '../../../helpers/constants'

let CategorySelectionComp = ({ imgSrc, imgSrc2, title, color, isActive, setIsActive, comp }) => {

    let navigate = useNavigate();

    let outerClass = isActive[comp] ? css.outerDivActive : css.outerDiv;
    let titleClass = isActive[comp] ? css.titleActive : css.title;
    let backgroundColor = isActive[comp] ? color : "#eee";

    let changeState = () => {
        setIsActive(val => {
            return {
                dinning: false,
                delivery: false,
                nightlife: false,
                [comp]: !val[comp]
            }
        });

        let param = comp === "delivery" ? orderOnlinePage : comp === "dinning" ? diningOutPage : nightLifePage;
        navigate('/show-case/?page=' + param);;
    }

    return <div className={outerClass} onClick={changeState}>
        <div className={css.innerDiv}>
            <div className={css.imgBox} style={{ backgroundColor: backgroundColor }}>
                <img className={css.img} src={isActive[comp] ? imgSrc2 : imgSrc} alt="image" />
            </div>
            <div className={css.txtBox}>
                <div className={titleClass}>{title}</div>
            </div>
        </div>
    </div>
}

export default CategorySelectionComp;