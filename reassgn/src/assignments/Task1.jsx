import React, { useState } from 'react';

function Task1() {
  const [bgColor, setBgColor] = useState("grey");

  // Function to generate a random color
  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div>
      Task1
      <div
        style={{
          height: "300px",
          width: "300px",
          alignContent: "center",
          textAlign: "center",
          border: "1px solid black",
          backgroundColor: bgColor
        }}
      >
        <button onClick={() => setBgColor("blue")}>B</button>
        <button onClick={() => setBgColor("green")}>G</button>
        <button onClick={() => setBgColor("red")}>R</button>
        <button onClick={() => setBgColor(getRandomColor())}>RC</button>
      </div>
    </div>
  );
}

export default Task1;
