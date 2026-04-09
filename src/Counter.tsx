import {useState} from "react";
import {Settings} from "./Settings.tsx";
import {CounterView} from "./CounterView.tsx";

export const Counter = () => {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counterValue, setCounterValue] = useState(startValue)
    const [settingsMode, setSettingsMode] = useState(false)


    const increaseCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)

    const resetCounterValue = () => setCounterValue(startValue)

    const openSettings = () => setSettingsMode(true)

    const setSettings = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
        setSettingsMode(false)
    }

    const isIncreaseDisabledBtn = counterValue === maxValue
    const isResetDisabledBtn = counterValue === startValue


    return (
        <div className='counter'>
            {settingsMode
                ?
                <Settings setSettings={setSettings} startValue={startValue} maxValue={maxValue}/>
                :
                <CounterView
                    counterValue={counterValue}
                    maxValue={maxValue}
                    isIncreaseDisabledBtn={isIncreaseDisabledBtn}
                    isResetDisabledBtn={isResetDisabledBtn}
                    resetCounterValue={resetCounterValue}
                    increaseCounterValue={increaseCounterValue}
                    openSettings={openSettings}/>}
        </div>
    );
};

