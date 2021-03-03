import React from 'react'

import './singin.style.scss'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-buttom.component'

import {singInWithGoogle} from '../../firebase/firebase.utils'

class SingIn extends React.Component{
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
            <div className='singin'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handlerSubmit}>
                    <FormInput type='email' name='email' required handleChange={this.handleChange} value={this.state.email} label='email'/>
                    <FormInput type='password' name='password' required handleChange={this.handleChange} value={this.state.password} label='password'/>
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sing in</CustomButton>
                        <CustomButton onClick={singInWithGoogle} isGoogleSingIn>Sing in with Google</CustomButton>
                    </div>

                </form>

            </div>
        )
    }
}

export default SingIn;