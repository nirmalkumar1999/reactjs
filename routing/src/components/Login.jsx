import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    let user={
        username: "nirmal",
        password: "1234"
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        if(username===user.username && password===user.password)
        {
            setusername("")
            setpassword("")
            navigate("/")
        }
        else
        {
            alert("username and password are wrong")
        }
    }
  return (
    <>
        <h1>Login form</h1>
        <form onSubmit={submitHandler}>
            <table>
                <tr>
                    <td><label>username :</label></td>
                    <td><input type="text" 
                    onChange={(e)=>setusername(e.target.value)}
                    value={username}/></td>
                </tr>
                <tr>
                    <td><label>password :</label></td>
                    <td><input type="password" 
                    onChange={(e)=>setpassword(e.target.value)}
                    value={password}/></td>
                </tr>
                <tr>
                    <td>
                        <button>Login</button>
                    </td>
                </tr>
            </table>
        </form>
    
    </>
  )
}

export default Login