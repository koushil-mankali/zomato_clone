import Leftsearch from './leftsearch';
import Rightsearch from './rightsearch';

import './Searchbar.css'

let Searchbar = () => {
    return <div className='searchbar'>
        <Leftsearch />
        <div className='searchBreak'>|</div>
        <Rightsearch />
    </div>
}

export default Searchbar;