import css from './SearchListedRestaurant.module.css'

let SearchListedRestaurant = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Already have your restaurant listed?</div>
            <div className={css.tagLine}>Search here and claim the ownership of your restaurant</div>
            <div className={css.searchBox}></div>
        </div>
    </div>
}

export default SearchListedRestaurant;