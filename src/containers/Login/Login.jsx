import React from "react";
import { render } from 'react-dom'

import styled from "styled-components";
import hide from "image/hide.png";
import arrRight from "image/arr-right.svg";
import Google from "image/Google.svg";
import Github from "image/Github.svg";
import Facebook from "image/Facebook.svg";
import Working from "image/Character-working-laptop-sitting-chair.svg"
import Tree from "image/cactus.svg"

import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
// import show from "image/show.png"




const Container = styled.div`
  margin: 119px 318px 112px 176px;
  width: 1248px;
  height: auto;
  background: #fff;
  border-radius: 40px;  

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 52px;
  margin: 0;
}

label {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 16px;
}

.login-form {
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  width: 478px;
  padding: 70px 0 5px 50px;
}

.flex-container {
  display: flex;
  height: 100%;
}

.layout2 {
  display: flex;
  width: 40%;
  background-color: #6096b4;
  border-radius: 40px;
}

.flex-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 70%;
}

.flex-item1 {
  display: flex;
  justify-content: space-between;
}

.flex-item1 a {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-align: right;
  font-size: 14px;
  color: #000000;
  opacity: 0.5;
  font-weight: 300;
}

.login-form button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  text-align: center;

  width: 150px;
  height: 46px;
  border: none;
  background: #d885a3;
  border-radius: 23px;
}

.login-style {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #ffffff;
}

.image-style {
  position: relative;
  display: block;
  top: 100px;
  right: 290px;
  width: 552px;
}

.image-style1 {
  display: block;
  position: relative;
  width: 200px;
  height: 550px;
  top: 100px;
  right: 240px;
}

.image-style2 {
  vertical-align: middle;
}

.image-size {
  display: flex;
  width: 374px;
}

.layout1 {
  width: 70%;
}

.flex-item input {
  border: none;
  height: 46px;
  width: 100%;
  padding: 0 10px;
  border-radius: 4px;
  background: #c0dbea;
}

.flex-item2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 20px 0;
}

.title-style {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin: 43px 0 23px 0;
  color: #6096b4;
}

.login-by {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.login-by a {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 125px;
  height: 50px;
  border: 1px solid #6096b4;
  border-radius: 40px;
}

.ButtonStyled {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-align: center;
    width: 150px;
    height: 46px;
    border: none;
    background: #d885a3;
    border-radius: 23px;
}

.register {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.register p {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  opacity: 0.5;
}

.register a {
  font-family: "Nunito", sans-serif;
  color: #d885a3;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
}

.image-style3 {
  width: 50px;
}

#field-icon {
  float: right;
  width: 20px;
  cursor: pointer;
  margin-top: -32px;
  position: relative;
  z-index: 2;
}

.password-style {
  width: 100%;
}
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  if (values.username !== 'chien') {
    return { username: 'Unknown username' }
  }
  if (values.password !== '123') {
    return { [FORM_ERROR]: 'Login Failed' }
  }
  window.alert("LOGIN SUCCESS!")
}

const Login = () => {
  return (
    <Container>
      <div className="flex-container">
        <div className="layout1">
          <form classNames="login-form" action="#">
            {/* <img class="image-style3" src="./img/logo.svg" alt="icon-logo" /> */}
            <h2>Login</h2>
            <div className="flex-item">

              <Form
                onSubmit={onSubmit}
                validate={values => {
                  const errors = {}
                  if (!values.username) {
                    errors.username = 'Required'
                  }
                  if (!values.password) {
                    errors.password = 'Required'
                  }
                  return errors
                }}
                render={({
                  submitError,
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Field name="username">
                      {({ input, meta }) => (
                        <div>
                          <label>Username</label>
                          <input {...input} type="text" placeholder="Username" />
                          {(meta.error || meta.submitError) && meta.touched && (
                            <span style={{ color: "red", fontWeight: "bold" }}>
                              {meta.error || meta.submitError}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="password">
                      {({ input, meta }) => (
                        <div>
                          <label>Password</label>
                          <input {...input} type="password" placeholder="Password" />
                          {meta.error && meta.touched && <span style={{ color: "red", fontWeight: "bold" }}>
                            {meta.error}
                          </span>}
                        </div>
                      )}
                    </Field>
                    {submitError && <div className="error">{submitError}</div>}
                    <div className="buttons">
                      <button type="submit" disabled={submitting}>
                        Log In
                      </button>
                      <button
                        className="log-button"
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                      >
                        Reset
                      </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                  </form>
                )}
              />
              {/* <label for="user">Username</label>
              <input type="text" name="user" id="username-field" />
              <div className="flex-item1">
                <label for="password">Password</label>
                <a href="./login">Forgot password?</a>
              </div>
              <div className="password-style">
                <input type="password" name="password" id="password-field" /><span
                  className="toggle-password"><img onclick="showHidePassword()" id="field-icon" src={hide}
                    alt="icon-eye" /></span>
              </div>
            </div>
            <div className="flex-item2">
              <button className="ButtonStyled" type="button" onclick="login()">
                <p className="login-style">Login</p>
                <img className="image-style2" src={arrRight} alt="icon-arrow-right" />
              </button> */}
              <p className="title-style">or continue with</p>
              <div className="login-by">
                <a href="https://www.google.com.vn/?hl=vi"><img src={Google} alt="icon-google" /></a>
                <a href="https://github.com/"><img src={Github} alt="icon-github" /></a>
                <a href="https://facebook.com/"><img src={Facebook} alt="icon-facebook" /></a>
              </div>
              <div className="register">
                <p>Don't have an account yet?</p>
                <a href="./login">Sign up for free</a>
              </div>
            </div>
          </form>
        </div>
        <div className="layout2">
          <div> <img className="image-style" src={Working} alt="img-working" />
          </div>
          <div> <img className="image-style1" src={Tree} alt="img-cactus" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Login;