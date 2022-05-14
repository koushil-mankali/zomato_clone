import { useState } from 'react'

import SearchIcon from '../../../public/images/searchIcon.svg'

import './Rightsearch.css'

let Rightsearch = () => {
    let [search, setSearch] = useState();

    return <>
        <div className='search2'>
            <div className='box2'>

                <img className='searchIcon' src={SearchIcon} alt='pin' />
                <input className='searchbar2' autoComplete="on" onChange={e => setSearch(e.target.value)} />
            </div>
            {/* <div id="suggestions" className='options'>
                <div className='option'>Hyderabad</div>
                <div className='option'>Nizamabad</div>
            </div> */}
        </div>
    </>
}

export default Rightsearch;