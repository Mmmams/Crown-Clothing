import React from 'react'

import './sing-in-and-sing-up.style.scss'

import SingIn from '../../components/singin/singin.component'

const SingInAndSingUp = () =>{
    return(
        <div className='sing-in-and-sing-up'>
            <h1>SING IN PAGE</h1>
            <SingIn/>
        </div>
    )
}

export default SingInAndSingUp;