import React from 'react'

import './signin.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttom.component'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    handlerSubmit = (event) =>{
        console.log(event)
        event.preventDefault();
        this.setState({email : '',password : ''})
    }

    handleChange = (event) =>{
        console.log(event)
        const {name, value} = event.target;
        this.setState({[name] : value})

    }

    render(){
        return(
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlerSubmit}>
                    <FormInput type='email' name='email' required handleChange={this.handleChange} value={this.state.email} label='email'/>
                    <FormInput type='password' name='password' required handleChange={this.handleChange} value={this.state.password} label='password'/>

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn;