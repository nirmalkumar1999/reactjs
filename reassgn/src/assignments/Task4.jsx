import React, { useState, useCallback } from 'react';

function Task4() {
    const [circles, setCircles] = useState([]);

    // Create circle function
    const createCircle = useCallback(() => {
        setCircles(prevCircles => [
            ...prevCircles,
            { isSelected: false, id: Math.trunc(Math.random() * 10000) },
        ]);
    }, [])

    // Toggle circle selection
    const makeSelected = useCallback((circleId) => {
        setCircles(prevCircles =>
            prevCircles.map(circle =>
                circle.id === circleId
                    ? { ...circle, isSelected: !circle.isSelected }
                    : circle
            )
        );
    }, []);

    // Delete selected circles
    const deleteCircle = useCallback(() => {
        setCircles(prevCircles => prevCircles.filter(circle => !circle.isSelected));
    }, []);

    // Compute circle stats once
    const totalCircles = circles.length;
    const selectedCircles = circles.filter(circle => circle.isSelected).length;

    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <button
                    onClick={createCircle}
                    style={{
                        background: "green",
                        marginLeft: "450px",
                        height: "50px",
                        color: "white",
                        cursor: 'pointer'
                    }}
                >
                    Create Circle
                </button>
                <button
                    onClick={deleteCircle}
                    style={{
                        background: "red",
                        height: "50px",
                        marginLeft: "100px",
                        color: "white",
                        cursor: 'pointer'
                    }}
                >
                    Delete Circle
                </button>
            </div>

            <div style={{ marginLeft: "500px" }}>
                <h3>No of circles: {totalCircles}</h3>
                <h3>No of selected circles: {selectedCircles}</h3>
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {circles.map(circle => (
                    <div
                        key={circle.id}
                        style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "50%",
                            backgroundColor: circle.isSelected ? "red" : "green",
                            cursor: 'pointer',
                            border: '2px solid white',
                        }}
                        onClick={() => makeSelected(circle.id)}
                    />
                ))}
            </div>
        </>
    );
}

export default Task4;
