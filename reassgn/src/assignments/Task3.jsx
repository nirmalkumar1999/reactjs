import React, { useState } from 'react'

function Task3() {
    const [count,setCount] = useState(0)
    const updateCount = () =>{
        setCount(count+1)
        setCount(count+1)
        setCount((preState) =>{
            return preState+1
        })
        setCount((preState) =>{
            return preState+1
        })
    }
  return (
    <div>
      { console.log("render method")}
      <h1>{count}</h1>
      <button onClick={(updateCount)}>update count</button>
    </div>
  )
}

export default Task3