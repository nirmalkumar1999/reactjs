import React, { useState } from 'react'

function Task7() {
    const[count,setCount]=useState(0)
    const checkprime=(number)=>{
        if(number <= 1) return false
        if(number == 2) return true
        if(number % 2 == 0) return false

    }
  return (
    <>
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <b>{count}</b>
            <button onClick={()=> setCount(count-1)}>-</button>
        </div>
        <div>
            {
                count % 2 == 0 ? 
                <h1>{count} is even</h1> :
                <h1>{count} is odd</h1>
            }
            {
                checkprime(count) && <h1>{count} is a prime number</h1>
            }
        </div>
    </>
  )
}

export default Task7