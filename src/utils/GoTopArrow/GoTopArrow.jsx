import css from './GoTopArrow.module.css';

import topArrow from '/icons/up-arrow.png';

let GoTopArrow = () => {
    return <div className={css.outerDiv} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className={css.innerDiv}><img className={css.topArrow} src={topArrow} alt="up arrow" /></div>
    </div>
}

export default GoTopArrow;