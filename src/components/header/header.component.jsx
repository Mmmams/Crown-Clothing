import React from 'react'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import './header.style.scss'

const Header = ({currentUser}) =>{
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/'>
                    CONTACTS
                </Link>
                {
                    currentUser ? 
                    <div onClick={()=>auth.signOut()}>SING OUT</div>
                    :
                    <Link className='option' to='/singin'>
                        SING IN
                    </Link>
                }
               
            </div>
        </div>
    )

}

export default Header;