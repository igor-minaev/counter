import {useState} from "react";
import {Settings} from "./components/Settings/Settings.tsx";
import {CounterView} from "./components/CounterView/CounterView.tsx";
import {getValuesFromLocalStorage, setValuesToLocalStorage} from "./utilsLocalStorage"


const DEFAULT_START_VALUE = 0
const DEFAULT_MAX_VALUE = 5


export const Counter = () => {

    const [startValue, setStartValue] = useState(getValuesFromLocalStorage("startValue", DEFAULT_START_VALUE))
    const [maxValue, setMaxValue] = useState(getValuesFromLocalStorage('maxValue', DEFAULT_MAX_VALUE))
    const [counterValue, setCounterValue] = useState(startValue)
    const [settingsMode, setSettingsMode] = useState(false)
    const [error, setError] = useState(false)


    const increaseCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)

    const resetCounterValue = () => setCounterValue(startValue)


    const setSettings = (startValue: number, maxValue: number) => {
        setValuesToLocalStorage('startValue', startValue)
        setValuesToLocalStorage('maxValue', maxValue)
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
        setSettingsMode(false)
        setError(false)
    }

    const isIncreaseDisabledBtn = counterValue === maxValue
    const isResetDisabledBtn = counterValue === startValue


    return (
        <>
            <Settings
                setSettingsMode={setSettingsMode}
                settingsMode={settingsMode}
                setSettings={setSettings}
                startValue={startValue}
                maxValue={maxValue}
                error={error}
                setError={setError}
            />
            <CounterView
                counterValue={counterValue}
                maxValue={maxValue}
                isIncreaseDisabledBtn={isIncreaseDisabledBtn}
                isResetDisabledBtn={isResetDisabledBtn}
                resetCounterValue={resetCounterValue}
                increaseCounterValue={increaseCounterValue}
                settingsMode={settingsMode}
                error={error}/>
        </>
    );
};
