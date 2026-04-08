import {CounterScreen} from "./CounterScreen.tsx";
import {Button} from "./components/Button.tsx";
import {useState} from "react";

export const Counter = () => {
    const startValue = 0
    const maxValue = 5
    const [counterValue, setCounterValue] = useState(startValue)

    const increaseCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)
    const resetCounterValue = () => setCounterValue(startValue)

    const isIncreaseDisabledBtn = counterValue === maxValue
    const isResetDisabledBtn = counterValue === startValue

    return (
        <div className='counter'>
            <CounterScreen counterValue={counterValue} maxValue={maxValue}/>
            <div className='buttonsWrapper'>
                <Button className='button' disabled={isIncreaseDisabledBtn} onClick={increaseCounterValue}>inc</Button>
                <Button className='button' disabled={isResetDisabledBtn} onClick={resetCounterValue}>reset</Button>
                <Button className='button'>set</Button>
            </div>
        </div>
    );
};

