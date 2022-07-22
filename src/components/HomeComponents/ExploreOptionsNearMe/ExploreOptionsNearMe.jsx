import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard'

import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let chain = ['hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag', 'hyd', 'cheenai', 'vizag']
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Explore options near me</div>
            <div className={css.cards}>
                <CollapsableCard title="Top Restaurant Chains" content={chain} />
                <CollapsableCard title="Cities We Deliver To" content={chain} />
            </div>
        </div>
    </div>
}

export default ExploreOptionsNearMe;