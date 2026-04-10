import {useState} from "react";
import {Settings} from "./Settings.tsx";
import {CounterView} from "./CounterView.tsx";

const getValues = (key: 'startValue' | 'maxValue', defaultValue: number) => {
    const startValueAsString = localStorage.getItem(key)
    if (startValueAsString) {
        return JSON.parse(startValueAsString)
    }
    return defaultValue
}

const DEFAULT_START_VALUE = 0
const DEFAULT_MAX_VALUE = 5


export const Counter = () => {

    const [startValue, setStartValue] = useState(getValues("startValue", DEFAULT_START_VALUE))
    const [maxValue, setMaxValue] = useState(getValues('maxValue', DEFAULT_MAX_VALUE))
    const [counterValue, setCounterValue] = useState(startValue)
    const [settingsMode, setSettingsMode] = useState(false)


    const increaseCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)

    const resetCounterValue = () => setCounterValue(startValue)

    const openSettings = () => setSettingsMode(true)

    const setSettings = (startValue: number, maxValue: number) => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
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

