import { Link } from 'react-router-dom'

import logoName from '../../../../public/images/logoName.avif'
import './Navbar.css'

function Navbar() {
    return <>
        <nav className='navbar'>
            <div className='menuBar'>
                <div className='menuIcon'>☰</div>
                <div><img className='logoName' src={logoName} /></div>
            </div>
            <div className='NavSec1'>
                <Link to='/mobile' className='navItem'>📱 Get the App</Link>
            </div>
            <div className='NavSec2'>
                <Link to='partner-with-us' className='navItem'>Add Restuarant</Link>
                <div className='navItem'>Log in</div>
                <div className='navItem'>Sign up</div>
            </div>
        </nav>
    </>
}

export default Navbar;