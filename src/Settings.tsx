import {Button} from "./components/Button.tsx";
import {ChangeEvent, useState} from "react";
import {InputWithLabel} from "./InputWithLabel.tsx";

type SettingsPropsType = {
    setSettings: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number
}

export const Settings = ({
                             setSettings,
                             startValue,
                             maxValue
                         }: SettingsPropsType) => {
    const [newStartValue, setNewStartValue] = useState(startValue)
    const [newMaxValue, setNewMaxValue] = useState(maxValue)
    const [error, setError] = useState(false)

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value;
        setNewStartValue(newValue);
        if (newValue < 0 || newValue >= newMaxValue) {
            setError(true);
        } else {
            setError(false);
        }
    }


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        setNewMaxValue(newValue)
        if (newValue <= 0 || newValue <= newStartValue || newStartValue < 0) {
            setError(true);
        } else {
            setError(false);
        }
    }


    const setSettingsHandler = () => setSettings(newStartValue, newMaxValue)

    return (
        <>
            <div className="inputsWrapper">
                <InputWithLabel type='number' label="max value" value={newMaxValue} onChange={onChangeMaxValue} error={error}/>
                <InputWithLabel type='number' label="start value" value={newStartValue} onChange={onChangeStartValue} error={error}/>
            </div>
            <div className='buttonsWrapper'>
                <Button disabled={error} className='button' onClick={setSettingsHandler}>set</Button>
            </div>
        </>
    )
        ;
};

