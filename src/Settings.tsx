import {Button} from "./components/Button.tsx";
import {ChangeEvent, useState} from "react";

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

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => setNewStartValue(+e.currentTarget.value)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => setNewMaxValue(+e.currentTarget.value)

    const setSettingsHandler = () => setSettings(newStartValue, newMaxValue)

    return (
        <>
            <div className="inputsWrapper">
                <div className='labelInput'>
                    <label className='label'> max value:</label>
                    <input className='input' onChange={onChangeMaxValue} type="number" value={newMaxValue}/>
                </div>
                <div className='labelInput'>
                    <label className='label'> <span className='span'>start value:</span></label>
                    <input className='input' onChange={onChangeStartValue} type="number" value={newStartValue}/>
                </div>

            </div>
            <div className='buttonsWrapper'>
                <Button className='button' onClick={setSettingsHandler}>set</Button>
            </div>
        </>
    )
        ;
};

