import React from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttom.component'

import './signup.style.scss'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user,{ displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error)
        }

    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    };
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account.</h2>
                <span>Sign up with your email and password.</span>
                <form className='sing-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    handleChange={this.handleChange}
                    label='Name'
                    value={displayName}
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    handleChange={this.handleChange}
                    label='Email'
                    value={email}
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    handleChange={this.handleChange}
                    label='Password'
                    value={password}
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    handleChange={this.handleChange}
                    label='Confirm password'
                    value={confirmPassword}
                    required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>

        )
    }
}

export default SignUp;