import React, { Component } from 'react'

export class Createref extends Component {
  constructor() {
    super()
    this.usernameRef = React.createRef(null)
    this.passwordRef = React.createRef(null)
    this.usernameErrorRef = React.createRef(null)
    this.passwordErrorRef = React.createRef(null)
  }
  submitHandler = (event) => {
    event.preventDefault()
    const username = this.usernameRef.current.value
    const password = this.passwordRef.current.value
    console.log(username, password);
    if (!username || !password) {
      alert("all fields are required")
    }
    else{
    if (!username || username.length < 3) {
      this.usernameErrorRef.current.innerHTML = "enter valied username"
    }
    else {
      this.usernameErrorRef.current.innerHTML = ""
    }
    if (!password || password.length < 6) {
      this.passwordErrorRef.current.innerHTML = "minimum six letters are required"
    }
    else {
      this.passwordErrorRef.current.innerHTML = ""
    }
  }
  }
  render() {
    return (
      <div style={{
        border:"2px solid black",
        }}>
        <h1>uncontrolled form in class based</h1>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">username :</label>
          <input type="text" id="username" ref={this.usernameRef} />
          <span id="username-error" ref={this.usernameErrorRef} style={{ color: "red" }}></span>
          <br /><br />
          <label htmlFor="password">password :</label>
          <input type="password" id="password" ref={this.passwordRef} />
          <span id="password-error" ref={this.passwordErrorRef} style={{ color: "red" }}></span>
          <br /><br />
          <button style={{ marginLeft: "100px", background: "blue", color: "white" }}>login</button>
        </form>
      </div>
    )

  }
}

export default Createref