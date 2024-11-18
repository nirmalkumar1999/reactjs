import React, { useState } from 'react'

function Task2() {
    const [count,setCount] = useState(0)
    const [bgColor,setBgColor] = useState("white")
    function decrement() {
        setCount((prev) =>{
            let next = prev-1
            if(next == 0){
                setBgColor("white")
            }
            else if(next < 0){
                setBgColor("black")
            }
            else if(next > 0 && next <5){
                setBgColor("purple")
            }
        })
    }
    function increment() {
        setCount((prev) =>{
            let next = prev+1
            if(next == 0){
                setBgColor("white")
            }
            else if(next < 0){
                setBgColor("black")
            }
            else if(next > 0 && next <5){
                setBgColor("purple")
            }
        })
    }
      return (
    <div style={{
        height: "300px",
        width: "300px",
        alignContent: "center",
        textAlign: "center",
        border: "1px solid black",
        backgroundColor: bgColor
    }}>
        <button onClick={decrement}>-</button>
        <b>{count}</b>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Task2