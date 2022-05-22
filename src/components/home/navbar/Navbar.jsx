import { useState } from 'react'
import { Link } from 'react-router-dom'

import logoName from '../../../../public/images/logoName.avif'
import userImg from '../../../../public/images/user2.jpg'

import './Navbar.css'

function Navbar({ setAuth }) {

    let [isLogedin, setIsLogedIn] = useState(true);
    let [show, setShow] = useState(false);

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
                {!isLogedin ?
                    <>
                        <div className='navItem' onClick={() => setAuth('login')}>Log in</div>
                        <div className='navItem' onClick={() => setAuth('signup')}>Sign up</div>
                    </>
                    :
                    <>
                        <div className='profileMenu' onClick={() => setShow(prev => !prev)}>
                            <img src={userImg} alt="profile pic" className='profilePic' />
                            <div className='profileName'>Name</div>
                            <div className='down_arrow'>&#709;</div>
                        </div>
                        <div className='profileBigMenu' style={{ display: `${show ? "block" : "none"}` }}>
                            <div className='profileTag'>Profile</div>
                            <div className='profileTag'>Notifications</div>
                            <div className='profileTag'>Bookmarks</div>
                            <div className='profileTag'>Reviews</div>
                            <div className='profileTag'>Network</div>
                            <div className='profileTag'>Find Friends</div>
                            <div className='profileTag'>Settings</div>
                            <div className='profileTag'>Logout</div>
                        </div>
                    </>
                }
            </div>
        </nav >
    </>
}

export default Navbar;