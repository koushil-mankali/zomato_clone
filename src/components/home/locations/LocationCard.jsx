import { Link } from 'react-router-dom'

import './LocationCard.css'

let LocationCard = ({ locationName, count, link }) => {
    return <div className='locationCard'>
        <span className='locationCardInner'>
            <span className='locationName'>{locationName}</span>
            <span className='locationRestCount'>({count})</span>
        </span>
        <span className='locationRightArrow'>&#707;</span >
    </div >
}

export default LocationCard;