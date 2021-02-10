import React from 'react'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import {Link} from 'react-router-dom'

import './header.style.scss'

const Header = () =>{
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option'>
                    CONTACTS
                </Link>
            </div>
        </div>
    )

}

export default Header;