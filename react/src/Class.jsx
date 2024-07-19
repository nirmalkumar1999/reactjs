import React, { Component } from 'react'

export class Class extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      usernameError: "*",
      passwordError: "*",
    }
  }
  handleusername = (event) => {
    let value = event.target.value
    if (value.length <= 3) {
      this.setState({ usernameError: "username is to short" })
    }
    else {
      this.setState({ usernameError: "" })
    }
    this.setState({ username: value })
  }
  handlepassword = (event) => {
    let value = event.target.value
    if (value.length <= 7) {
      this.setState({ passwordError: "required minimus six letters" })
    }
    else {
      this.setState({ passwordError: "" })
    }
    this.setState({ password: value })
  }
  formsubmit = (event) => {
    event.preventdefault()
    if (this.state.usernameError || this.state.passwordError) {
      alert("correct your details")
    }
    else {
      console.log(this.state);
      this.State({ username })
      this.State({ password })
    }
  }
  render() {
    return (
      <>
        <h1>controlled class component form</h1>
        <form onSubmit={this.formsubmit} style={{
          border: "2px solid black",
          width: "270px",
          borderRadius: "10px"
        }}>
          <br /><br />
          <label htmlFor='username' style={{ marginLeft: "8px" }}>username :</label>
          <input type="text" id='username'
            onChange={this.handleusername} value={this.state.username} />
          <span style={{ color: "red" }}>{this.state.usernameError}</span>
          <br /><br />
          <label htmlFor="pasword" style={{ marginLeft: "8px" }}>password :</label>
          <input type="password" id='password'
            onChange={this.handlepassword} value={this.State.password} />
          <span style={{ color: "red" }}>{this.state.passwordError}</span>
          <br /><br />
          <button id='button' style={{
            marginLeft: "115px",
            background: "blue",
            color: "white"
          }}>login</button>
          <br /><br />
        </form>
        <h2>{this.state.username}</h2>
        <h2>{this.state.password}</h2>
      </>
    )
  }
}

export default Class