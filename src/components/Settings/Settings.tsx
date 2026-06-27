import {Button} from "../Button/Button.tsx";
import {ChangeEvent, useState} from "react";
import {InputWithLabel} from "../InputWithLabel/InputWithLabel.tsx";
import s from './Settings.module.css'

type SettingsPropsType = {
    setSettings: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number
    settingsMode: boolean
    setSettingsMode: (settingsMode: boolean) => void
    error: boolean
    setError: (error: boolean) => void
}

export const Settings = ({
                             setSettings,
                             startValue,
                             maxValue,
                             settingsMode,
                             setSettingsMode,
                             error,
                             setError
                         }: SettingsPropsType) => {
    const [newStartValue, setNewStartValue] = useState(startValue)
    const [newMaxValue, setNewMaxValue] = useState(maxValue)

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        !settingsMode && setSettingsMode(true)

        const newValue = +e.currentTarget.value;
        setNewStartValue(newValue);
        if (newValue < 0 || newValue >= newMaxValue) {
            setError(true);
        } else {
            setError(false);
        }
    }


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        !settingsMode && setSettingsMode(true)
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
        <div className='counter'>
            <div className={s.inputsWrapper}>
                <InputWithLabel type='number' label="max value" value={newMaxValue} onChange={onChangeMaxValue} error={error}/>
                <InputWithLabel type='number' label="start value" value={newStartValue} onChange={onChangeStartValue} error={error}/>
            </div>
            <div className={s.buttonsWrapper}>
                <Button disabled={error || !settingsMode} onClick={setSettingsHandler}>set</Button>
            </div>
        </div>
    )
        ;
};

