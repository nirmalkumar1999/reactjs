import React, { useState } from 'react'

function Function() {
  const [username, setusername] = useState("")
  const [usernameError, setusernameError] = useState("*")
  const [password, setpassword] = useState("")
  const [passwordError, setpasswordError] = useState("*")
  function handleusername(event) {
    let value = event.target.value
    if (value.length <= 3) {
      setusernameError("username is to short")
    }
    else {
      setusernameError("")
    }
    setusername(value)
  }
  function handlepassword(event) {
    const value = event.target.value
    if (value.length <= 7) {
      setpasswordError("required mimimum six letters")
    }
    else {
      setpasswordError("")
    }
    setpassword(event.target.value)
  }
  function formsubmit(event) {
    event.preventDefault()
    if (usernameError || passwordError) {
      alert("correct your details")
    }
    else {
      console.log(username, password);
      setusername("")
      setpassword("")
    }
  }
  return (
    <>
      <h1>controlled function component form</h1>
      <form onSubmit={formsubmit} style={{
        border: "2px solid black",
        width: "270px",
        borderRadius: "10px"
      }}>
        <br /><br />
        <label htmlFor='username' style={{ marginLeft: "8px" }}>username :</label>
        <input type="text" id='username'
          onChange={handleusername} value={username} />
        <span style={{ color: "red" }}>{usernameError}</span>
        <br /><br />
        <label htmlFor="pasword" style={{ marginLeft: "8px" }}>password :</label>
        <input type="password" id='password'
          onChange={handlepassword} value={password} />
        <span style={{ color: "red" }}>{passwordError}</span>
        <br /><br />
        <button id='button' style={{
          marginLeft: "115px",
          background: "blue",
          color: "white"
        }}>login</button>
        <br /><br />
      </form>
      <h2>{username}</h2>
      <h2>{password}</h2>

    </>
  )
}

export default Function