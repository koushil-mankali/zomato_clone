import css from './SearchBar.module.css'

import downArrow from '/icons/down-arrow1.png'
import locationIcon from '/icons/location.png'
import searchIcon from '/icons/search.png'

let SearchBar = () => {
    return <div className={css.outerDiv}>
        <div className={css.srch1}>
            <div className={css.iconBox}><img className={css.icon} src={locationIcon} alt="location pointer" /></div>
            <input type="text" placeholder="Place.." className={css.inpt} />
            <div className={css.iconBox}><img className={css.downArrow} src={downArrow} alt="down arrow" /></div>
        </div>
        <hr className={css.hr} />
        <div className={css.srch2}>
            <div className={css.iconBox}><img className={css.icon} src={searchIcon} alt="search icon" /></div>
            <input type="text" placeholder='Search for restaurant, cuisine or a dish' className={css.inpt} />
        </div>
        <div className={css.dropdownBox} style={{ display: "none" }}>
            <div className={css.dropdown}>
            </div>
        </div>
    </div>
}

export default SearchBar;