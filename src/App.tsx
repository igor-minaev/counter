import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    const maxValue = 5
    const [count, setCount] = useState<number>(0)
    const incrementCount = () => setCount(count + 1)
    const resetCount = () => setCount(0)

    return (
        <div className="App">
            <Counter count={count} maxValue={maxValue} incrementCount={incrementCount} resetCount={resetCount}/>
        </div>
    );
}

export default App;
