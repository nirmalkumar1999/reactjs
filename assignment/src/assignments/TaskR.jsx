import React, { useEffect, useRef, useState } from 'react'

function TaskR() {
    const [boxes, setBoxes] = useState([])
    const [start, setStart] = useState(false)
    const count = useRef(0)
    useEffect(() => {
        let generateBoxes = []
        for (let i = 1; i <= 60; i++) {
            generateBoxes.push("_")
        }
        setBoxes(generateBoxes)
    }, [])
    function startChanges() {
        setStart(true)
    }
    useEffect(() => {
        let interval
        if (start) {
            interval = setInterval(() => {
                let newBoxes
                if (count.current == 60) {
                    count.current = 0
                }
                newBoxes = boxes.map((ele, i) => {
                    if (count.current == i) {
                        return generateRandomColor()
                    }
                    // return ele
                })
                count.current = count.current + 1
                setBoxes(newBoxes)
            }, 500)
        }
        else {
            clearInterval(interval)
        }
        //cleanup function
        return () => clearInterval(interval)
    }, [start])
    const generateRandomColor = () => {
        let r = () => Math.trunc(Math.random() * 255)
        let g = () => Math.trunc(Math.random() * 255)
        let b = () => Math.trunc(Math.random() * 255)
        const rgb = () => `rgb(${r()},${g()},${b()})`
        const angel = () => Math.trunc(Math.random() * 360)
        return `linear-gradient(${angel()}deg,${rgb()},${rgb()},${rgb()})`
    }
    const handelReset = () => {
        setStart(false);
        count.current = 0
    }
    return (
        <>
            <div>
                <button onClick={startChanges}>Start</button>
                <button onClick={() => setStart(false)}>Stop</button>
                <button onClick={handelReset}>Reset</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "20px 10px" }}>
                {
                    boxes.map((ele, i) => {
                        return <div key={i} style={{
                            height: "100px", width: "100px", border: "1px solid black",
                            background: ele
                        }}>
                            {i}
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default TaskR