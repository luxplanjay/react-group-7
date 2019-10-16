import React, { Component } from 'react';
import shortid from 'shortid';
import {
  validateEmail,
  validateStringLength,
} from '../services/validation-service';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  OTHER: 'other',
};

export default class SignupForm extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    gender: '',
    age: '',
  };

  inputIds = {
    loginInputId: shortid.generate(),
    emailInputId: shortid.generate(),
    passwordInputId: shortid.generate(),
    agreedInputId: shortid.generate(),
    maleGenderInputId: shortid.generate(),
    femaleGenderInputId: shortid.generate(),
    otherGenderInputId: shortid.generate(),
    ageSelectId: shortid.generate(),
  };

  handleChange = e => {
    const { name, value, type, checked } = e.currentTarget;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const loginValidation = validateStringLength(this.state.login, {
      min: 6,
      max: 10,
    });

    if (!loginValidation.valid) {
      console.log(loginValidation.message);
      return;
    }

    const emailvalidation = validateEmail(this.state.email);

    if (!emailvalidation.valid) {
      console.log(emailvalidation.message);
      return;
    }

    /* eslint-disable-next-line */
    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({
      login: '',
      email: '',
      password: '',
      agreed: false,
      gender: '',
      age: '',
    });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;
    const {
      loginInputId,
      emailInputId,
      passwordInputId,
      agreedInputId,
      maleGenderInputId,
      femaleGenderInputId,
      otherGenderInputId,
      ageSelectId,
    } = this.inputIds;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label htmlFor={loginInputId} className="Label">
          <span className="Label__text">Login</span>
          <input
            className="Input"
            type="text"
            name="login"
            id={loginInputId}
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <label className="Label" htmlFor={emailInputId}>
          <span className="Label__text">Email</span>

          <input
            className="Input"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
            id={emailInputId}
          />
        </label>

        <label className="Label" htmlFor={passwordInputId}>
          <span className="Label__text">Password</span>
          <input
            className="Input"
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
            id={passwordInputId}
          />
        </label>

        <label className="Label" htmlFor={agreedInputId}>
          <span className="Label__text">Agree to terms</span>
          <input
            className="Checkbox"
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
            name="agreed"
            id={agreedInputId}
          />
        </label>

        <section role="group">
          <p>Select your gender</p>

          <label htmlFor={maleGenderInputId} className="Label">
            <span className="Label__text">Male</span>
            <input
              type="radio"
              checked={gender === Gender.MALE}
              value={Gender.MALE}
              onChange={this.handleChange}
              name="gender"
              id={maleGenderInputId}
            />
          </label>

          <label htmlFor={femaleGenderInputId} className="Label">
            <span className="Label__text">Female</span>
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              value={Gender.FEMALE}
              onChange={this.handleChange}
              name="gender"
              id={femaleGenderInputId}
            />
          </label>

          <label htmlFor={otherGenderInputId} className="Label">
            <span className="Label__text">Other</span>
            <input
              type="radio"
              checked={gender === Gender.OTHER}
              value={Gender.OTHER}
              onChange={this.handleChange}
              name="gender"
              id={otherGenderInputId}
            />
          </label>
        </section>

        <label className="Label" htmlFor={ageSelectId}>
          <span className="Label__text">Choose your age</span>
          <select
            name="age"
            value={age}
            onChange={this.handleChange}
            id={ageSelectId}
          >
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" className="Button" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
