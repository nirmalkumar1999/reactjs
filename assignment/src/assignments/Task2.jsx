import React, { useState } from 'react'

function Task2() {
    const [text, setText] = useState("")
    const changeUppercase = () => {
        setText(text.toUpperCase())
    }
    const removeText = () => {
        setText("")
    }
    const countLetters = () => {
        let count = text.trim().length
        return count
    }
    const conutWords = () => {
        if (text) {
            let wordCount = text.trim().split(" ").length
            return wordCount
        }
        return 0
    }
    return (
        <>
            <textarea cols={"40"} rows={"10"}
                onChange={(e) => setText(e.target.value)} value={text}></textarea>
            <button onClick={changeUppercase}>Uppercase</button>
            <button onClick={removeText}>Remove</button>
            <div>
                <h1>No of letters :{countLetters()}</h1>
                <h1>No of words :{conutWords()}</h1>
            </div>
        </>
    )
}

export default Task2 