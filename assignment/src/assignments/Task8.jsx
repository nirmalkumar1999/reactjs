import React, { useState } from 'react'

function Task8() {
    const [circles, setCircles] = useState([])
    function createCircle() {
        let obj = {
            isSelected: false,
            id: Math.trunc(Math.random() * 10000)
        }
        setCircles([...circles, obj])
    }
    function makeSelected(circleId) {
        // console.log(circleId);
        let newCircles = circles.map((ele) => {
            if (ele.id === circleId) {
                ele.isSelected = !ele.isSelected
            }
            return ele
        })
        setCircles(newCircles)
    }
    function deleteCircle() {
        let filterdCircles = circles.filter(ele => !ele.isSelected)
        setCircles(filterdCircles)
    }
    return (
        <>
            <div>
                <button onClick={createCircle} style={{background:"green"}}>Create Circle</button>
                <button onClick={deleteCircle} style={{background:"red"}}>Delete Circle</button>
            </div>
            <div>
                <h3>No of circles :{circles.length}</h3>
                <h3>No of selected circles :{circles.filter(ele => ele.isSelected).length}</h3>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {
                    circles.map(e => {
                        return <div style={{
                            height: "100px",
                            width: "100px", borderRadius: "50%",
                            backgroundColor: e.isSelected ? "red" : "green"
                        }}
                            onClick={() => makeSelected(e.id)}
                        >
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Task8;