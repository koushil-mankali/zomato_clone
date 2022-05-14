import { useState } from 'react'

import LocationPin from '../../../public/images/locationPin.png'

import './Leftsearch.css'

let Leftsearch = () => {
    let [search, setSearch] = useState();

    return <>
        <div className='search'>
            <div className='box'>
                <img className='locationPin' src={LocationPin} alt='pin' />
                <input className='searchbar' autoComplete="on" onChange={e => setSearch(e.target.value)} />
            </div>
            {/* <div id="suggestions" className='options'>
                <div className='option'>Hyderabad</div>
                <div className='option'>Nizamabad</div>
            </div> */}
        </div>
    </>
}

export default Leftsearch;