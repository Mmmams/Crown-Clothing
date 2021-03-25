import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import "./signup.style.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredintials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredintials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account.</h2>
      <span>Sign up with your email and password.</span>
      <form className="sing-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          handleChange={handleChange}
          label="Name"
          value={displayName}
          required
        />
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          label="Email"
          value={email}
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          label="Password"
          value={password}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          label="Confirm password"
          value={confirmPassword}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
