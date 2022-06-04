import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Collections from '../../components/Collections/Collections';

import NavigationBar2 from '../../components/NavigationBar2/NavigationBar2';
import CategorySelectionComp from '../../utils/CategorySelectionComp/CategorySelectionComp'
import ShowcaseCard from '../../utils/ShowcaseCard/ShowcaseCard'

import dinning1 from '../../../public/icons/dinning1.png';
import dinning2 from '../../../public/icons/dinning2.png';
import delivery1 from '../../../public/icons/delivery1.png';
import delivery2 from '../../../public/icons/delivery2.png';
import nightlife1 from '../../../public/icons/nightlife1.png';
import nightlife2 from '../../../public/icons/nightlife2.png';

import { orderOnlinePage } from '../../helpers/constants'

import css from './ShowCase.module.css';

let ShowCase = () => {
    let location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get('page');

    let [isActive, setIsActive] = useState({
        dinning: true,
        delivery: false,
        nightlife: false
    })

    return <div className={css.outerDiv}>
        <NavigationBar2 />
        <div className={css.innerDiv}>
            <div className={css.breadcrumb}>
                Home
                /
                India
                /
                Hyderabad
                /
                Hyderabad City
                /
                Indira Nagar
            </div>
            <div className={css.showcaseComps}>
                <CategorySelectionComp title="Delivery" imgSrc={delivery1} imgSrc2={delivery2} color="#FCEEC0" comp='delivery' isActive={isActive} setIsActive={setIsActive} />
                <CategorySelectionComp title="Dinning" imgSrc={dinning1} imgSrc2={dinning2} color="#EDF4FF" comp='dinning' isActive={isActive} setIsActive={setIsActive} />
                <CategorySelectionComp title="NightLife" imgSrc={nightlife1} imgSrc2={nightlife2} color="#EDF4FF" comp='nightlife' isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
        <hr className={css.hr} />
        {page !== orderOnlinePage ?
            <div className={css.innerDiv2}>
                <div className={css.w8}>
                    <Collections />
                </div>
            </div> : null}
        <div className={css.innerDiv3}>
        </div>
    </div>
}

export default ShowCase;