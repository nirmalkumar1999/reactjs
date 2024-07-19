import React, { useState } from 'react'

function Task3() {
    const [label, setLabel] = useState("")
    const [inputType, setInputType] = useState("")
    const [form, setForm] = useState([])
    let inputTypes = ["text", "number", "email", "password", "date", "color", "submit", "reset", "button", "week", "month", "radio", "checkbox"]
    function generate() {
        let obj = { label, inputType }
        setForm([...form, obj])
        setLabel("")
        setInputType("")
    }
    return (
        <>
            <label htmlFor="label">Label :</label>
            <input type="text" onChange={(e) => setLabel(e.target.value)} value={label} /> <br /> <br />

            <label htmlFor="input">Select Input</label>
            <select name="" id="" onChange={(e) => setInputType(e.target.value)} value={inputType}>
                <option value="">Select input....</option>
                {
                    inputTypes.map(ele => {
                        return <option value={ele}>{ele.toUpperCase()}</option>
                    })
                }
            </select> <br /> <br />
            <button onClick={generate}>Generate Input</button>
            <hr />
            <form>
                {form.map(ele => {
                    return <div>
                        <label htmlFor="">{ele.label}</label>
                        <input type={ele.inputType} value={ele.inputType === "button" ? ele.label : ''} placeholder={`enter your ${ele.label}`}/>
                    </div>
                })}
            </form>
        </>
    )
}

export default Task3
