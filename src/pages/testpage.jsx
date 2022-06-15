import { useState } from 'react'

import OrderAgainCard from '../utils/OrderAgainCard/OrderAgainCard'
import CircleCard1 from '../utils/CircleCards/CircleCard1/CircleCard1'
import CircleCard2 from '../utils/CircleCards/CircleCard2/CircleCard2'
import ShowcaseCard from '../utils/ShowcaseCard/ShowcaseCard'
import GoTopArrow from '../utils/GoTopArrow/GoTopArrow'
import FilterBox from '../utils/FilterBox/FilterBox'
import SearchBar from '../utils/SearchBar/SearchBar'
import CategorySelectionComp from '../utils/CategorySelectionComp/CategorySelectionComp'
import LeftSideCardPanel from '../utils/LeftSideCardPanel/LeftSideCardPanel'

import downArrow from '../../public/icons/down-arrow.png'
import food from '../../public/images/fortheloveofbiryani.jpg'
import dinning1 from '../../public/icons/dinning1.png';
import dinning2 from '../../public/icons/dinning2.png';
import delivery1 from '../../public/icons/delivery1.png';
import delivery2 from '../../public/icons/delivery2.png';
import nightlife1 from '../../public/icons/nightlife1.png';
import nightlife2 from '../../public/icons/nightlife2.png';

import css from './testpage.module.css'

let Testpage = () => {

    let data1 = [ 
        {title: "Reviews", hash: "reviews"},
        {title: "Photos", hash: "photos"},
        {title: "Followers", hash: "followers"},
        {title: "Recently Viewed", hash: "recently-viewed"},
        {title: "Bookmarks", hash: "bookmarks"},
        {title: "Blog Posts", hash: "blog-posts"}
    ];
    let data2 = [ 
        {title: "Order History", hash: "order-history"},
        {title: "My Address", hash: "my-address"},
        {title: "Favorite Orders", hash: "favorite-orders"},
    ];

    let [isActive, setIsActive] = useState({
        dinning: true,
        delivery: false,
        nightlife: false
    })

    return <div >
        <h1> Test Page</h1>
        {/* <div className={css.styleClass}>
            <SearchBar />
        </div>

        <div className={css.styleClass}>
            <CategorySelectionComp title="Delivery" imgSrc={delivery1} imgSrc2={delivery2} color="#FCEEC0" comp='delivery' isActive={isActive} setIsActive={setIsActive} />
            <CategorySelectionComp title="Dinning" imgSrc={dinning1} imgSrc2={dinning2} color="#EDF4FF" comp='dinning' isActive={isActive} setIsActive={setIsActive} />
            <CategorySelectionComp title="NightLife" imgSrc={nightlife1} imgSrc2={nightlife2} color="#EDF4FF" comp='nightlife' isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className={css.styleClass}>
            <OrderAgainCard />
            <OrderAgainCard />
            <OrderAgainCard />
        </div>
        <div className={css.styleClass}>
            <CircleCard1 />
            <CircleCard1 />
            <CircleCard1 />
        </div>
        <div className={css.styleClass}>
            <CircleCard2 />
            <CircleCard2 />
            <CircleCard2 />
        </div>
        <div className={css.styleClass}>
            <ShowcaseCard />
            <ShowcaseCard />
            <ShowcaseCard />
        </div>
        <div className={css.styleClass}>
            <FilterBox text="filter: 11" leftIcon={downArrow} />
            <FilterBox text="filter: 11" rightIcon={downArrow} />
        </div> */}
        <div className={css.styleClass}>
            <LeftSideCardPanel name='ACTIVITY' data={data1} />
            <LeftSideCardPanel name='ONLINE ORDERING' data={data2} />
        </div>
        <div className={css.styleClass}>
            <GoTopArrow />
        </div>
    </div>
}

export default Testpage;