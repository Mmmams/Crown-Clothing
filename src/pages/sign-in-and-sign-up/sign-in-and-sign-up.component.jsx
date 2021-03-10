import React from 'react'

import './sign-in-and-sign-up.style.scss'

import SignIn from '../../components/signin/signin.component'

const SignInAndSignUp = () =>{
    return(
        <div className='sign-in-and-sign-up'>
            <h1>SIGN IN PAGE</h1>
            <SignIn/>
        </div>
    )
}

export default SignInAndSignUp;