import OrderAgainCard from '../utils/OrderAgainCard/OrderAgainCard'
import CircleCard1 from '../utils/CircleCards/CircleCard1/CircleCard1'
import CircleCard2 from '../utils/CircleCards/CircleCard2/CircleCard2'
import ShowcaseCard from '../utils/ShowcaseCard/ShowcaseCard'
import GoTopArrow from '../utils/GoTopArrow/GoTopArrow'
import FilterBox from '../utils/FilterBox/FilterBox'
import SearchBar from '../utils/SearchBar/SearchBar'

import downArrow from '../../public/icons/down-arrow.png'

import css from './testpage.module.css'

let Testpage = () => {
    return <div >
        <h1> Test Page</h1>
        <div className={css.styleClass}>
            <SearchBar />
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
        </div>
        <div className={css.styleClass}>
            <GoTopArrow />
        </div>
    </div>
}

export default Testpage;