import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    let startValue = 0
    let maxValue = 5
    const [count, setCount] = useState(0)
    const incrementCount = () => setCount(count + 1)
    const resetCount = () => setCount(startValue)
    return (
        <div className="App">
            <Counter
                count={count}
                startValue={startValue}
                maxValue={maxValue}
                incrementCount={incrementCount}
                resetCount={resetCount}/>
        </div>
    );
}

export default App;
