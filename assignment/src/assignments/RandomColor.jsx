import React, { useState, useEffect } from 'react';
import './RandomColor.css'

const App = () => {
  const [boxes, setBoxes] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const boxesArray = [];
    for (let i = 1; i <= 100; i++) {
      boxesArray.push({ id: i, backgroundColor: 'white' });
    }
    setBoxes(boxesArray);
  }, []);

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    const updatedBoxes = boxes.map((box, index) => {
      if (index === currentIndex) {
        return { ...box, backgroundColor: getRandomColor() };
      } else {
        return box;
      }
    });
    setBoxes(updatedBoxes);
    setCurrentIndex((currentIndex + 1) % boxes.length);
    console.log(currentIndex);
  };

  const startAnimation = () => {
    clearInterval(intervalId);
    const id = setInterval(changeColor,200);
    setIntervalId(id);
  };

  const stopAnimation = () => {
    clearInterval(intervalId);
    const resetBoxes = boxes.map(box => ({ ...box, backgroundColor: 'white' }));
    setBoxes(resetBoxes);
  };

    const ResetAnimation = () => {

    }
  return (
    <div className="App">
      <div id="container">
        {boxes.map(box => (
          <div
            key={box.id}
            className="box"
            style={{ backgroundColor: box.backgroundColor }}
          ></div>
        ))}
      </div>
      <button id="startBtn" onClick={startAnimation}>Start</button>
      <button id="stopBtn" onClick={stopAnimation}>Stop</button>
      <button id="resetBtn" onClick={ResetAnimation}>reset</button>
    </div>
  );
};

export default App;
