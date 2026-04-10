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

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => setNewStartValue(+e.currentTarget.value)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => setNewMaxValue(+e.currentTarget.value)

    const setSettingsHandler = () => setSettings(newStartValue, newMaxValue)

    return (
        <div className='counter'>
            <div className="inputsWrapper">
                <label> start value
                    <input onChange={onChangeStartValue} type="text" value={newStartValue}/>
                </label>
                <label> max value
                    <input onChange={onChangeMaxValue} type="text" value={newMaxValue}/>
                </label>
            </div>
            <div className='buttonsWrapper'>
                <Button className='button' onClick={setSettingsHandler}>set</Button>
            </div>
        </div>
    );
};

