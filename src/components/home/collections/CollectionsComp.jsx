import { Link } from 'react-router-dom'

import CollectionCard from './CollectionCard'

import * as CollectionCompCss from './CollectionsComp.module.css'

import cricketImg from '../../../../public/images/cricket.jpg'

let CollectionsComp = () => {
    return <div className={CollectionCompCss.collectionsSec}>
        <div className={CollectionCompCss.secTitle}>Collections</div>
        <div className={CollectionCompCss.tagLine}>
            <span className={CollectionCompCss.t1}>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</span>
            <Link to='/hyderabad/collections' className={CollectionCompCss.t2}>All collections in Hyderabad ▶</Link>
        </div>
        <div className={CollectionCompCss.cards}>
            <CollectionCard img={cricketImg} title="Live Cricket Screening" places="30" />
            <CollectionCard img={cricketImg} title="Live Cricket Screening" places="30" />
            <CollectionCard img={cricketImg} title="Live Cricket Screening" places="30" />
            <CollectionCard img={cricketImg} title="Live Cricket Screening" places="30" />
        </div>
    </div >
}

export default CollectionsComp;