import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";

function App() {
    let startValue = 0
    let maxValue = 5
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <Display count={count} maxValue={maxValue}/>
            <button disabled={count === maxValue} onClick={() => setCount(count + 1)}>inc</button>
            <button disabled={count === startValue} onClick={() => setCount(0)}>reset</button>
        </div>
    );
}

export default App;
