import React, { useState } from 'react';

function Task5() {
    const [count, setCount] = useState(0);
    const checkprime = (number) => {
        if (number <= 1) return false;
        if (number === 2) return true;
        if (number % 2 === 0) return false;
        for (let i = 3; i * i <= number; i += 2) {
            if (number % i === 0) return false;
        }

        return true;
    };

    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <b>{count}</b>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div>
                {
                    count > 0 ?
                        <h1>{count} is positive</h1> :
                        count < 0 ?
                            <h1>{count} is negative</h1> :
                            <h1>{count} is zero</h1>
                }

                {
                    count % 2 === 0 ?
                        <h1>{count} is even</h1> :
                        <h1>{count} is odd</h1>
                }

                {
                    checkprime(count) && <h1>{count} is a prime number</h1>
                }
            </div>
        </>
    );
}

export default Task5;
