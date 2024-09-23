import React, { useRef } from "react";

function Useref() {
  // const nameRef = useRef("virat")
  // console.log(nameRef);
  // function clickHandel(){
  //     nameRef.current= "jaddu"
  //     console.log(nameRef);
  // }
  // let pareRef = useRef(null)
  // console.log(pareRef);
  // function handelclick(){
  //     console.log(pareRef);
  //     pareRef.current.innerHTML = "how are you"
  //     pareRef.current.style.background="red"
  //     pareRef.current.style.color="white"
  //     pareRef.current.style.height="50px"
  //     pareRef.current.style.width="200px"
  // }

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const usernameErrorRef = useRef(null)
  const passwordErrorRef = useRef(null)
  function submitHandler(event) {
    event.preventDefault()
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    console.log(username, password);
    // this is to clear all the fields after subnission
    event.target.reset()
    // usernameRef.current.value=""
    // passwordRef.current.value=""

    // validation
    if (!username || !password) {
      alert("all fields are required")
    }
    else {
      if (!username || username.length < 3) {
        usernameErrorRef.current.innerHTML = "enter valied username"
      }
      else {
        usernameErrorRef.current.innerHTML = ""
      }
      if (!password || password.length < 6) {
        passwordErrorRef.current.innerHTML = "minimum six letters are required"
      }
      else {
        passwordErrorRef.current.innerHTML = ""
      }
    }
  }
  return (
    // <div>
    //     <h1>useRef() Hook</h1>
    //     <h1>{nameRef.current}</h1>
    //     <button onClick={clickHandel}>change name</button>
    //     <p ref={pareRef}>hi nirmal</p>
    //     <button onClick={handelclick}>click</button>
    // </div>
    <>
      <img src="https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
        alt="" style={{ height: "250px", width: "500px" }} />
      <h1>uncontrolled form in function based</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">username :</label>
        <input type="text" id="usernamef" ref={usernameRef} />
        <span id="username-error" ref={usernameErrorRef} style={{ color: "red" }}></span>
        <br /><br />
        <label htmlFor="password">password :</label>
        <input type="password" id="passwordf" ref={passwordRef} />
        <span id="password-error" ref={passwordErrorRef} style={{ color: "red" }}></span>
        <br /><br />
        <button style={{ marginLeft: "100px", background: "blue", color: "white" }}>login</button>
      </form>
    </>
  )
}


export default Useref