import {useState} from "react";
import {Settings} from "./Settings.tsx";
import {CounterView} from "./CounterView.tsx";
import {getValuesFromLocalStarage, setValuesToLocalStorage} from "./utilsLocalStarage.ts";


const DEFAULT_START_VALUE = 0
const DEFAULT_MAX_VALUE = 5


export const Counter = () => {

    const [startValue, setStartValue] = useState(getValuesFromLocalStarage("startValue", DEFAULT_START_VALUE))
    const [maxValue, setMaxValue] = useState(getValuesFromLocalStarage('maxValue', DEFAULT_MAX_VALUE))
    const [counterValue, setCounterValue] = useState(startValue)
    const [settingsMode, setSettingsMode] = useState(false)


    const increaseCounterValue = () => counterValue < maxValue && setCounterValue(counterValue + 1)

    const resetCounterValue = () => setCounterValue(startValue)

    const openSettings = () => setSettingsMode(true)

    const setSettings = (startValue: number, maxValue: number) => {
        setValuesToLocalStorage('startValue', startValue)
        setValuesToLocalStorage('maxValue', maxValue)
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

