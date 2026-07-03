import {Button} from "@/common/components/Button/Button";
import {InputWithLabel} from "@/common/components/InputWithLabel/InputWithLabel";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {ChangeEvent, useState} from "react";
import {setErrorAC, setSettingsAC, setSettingsModeAC} from "../../../model/counter-reducer";
import {selectError, selectMaxValue, selectSettingsMode, selectStartValue} from "../../../model/counter-selectors";
import s from './Settings.module.css'


export const Settings = () => {
    const maxValue = useAppSelector(selectMaxValue)
    const startValue = useAppSelector(selectStartValue)
    const settingsMode = useAppSelector(selectSettingsMode)
    const error = useAppSelector(selectError)

    const [newStartValue, setNewStartValue] = useState(startValue)
    const [newMaxValue, setNewMaxValue] = useState(maxValue)

    const dispatch = useAppDispatch()

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingsModeAC({mode: true}))
        const newValue = +e.currentTarget.value;
        setNewStartValue(newValue);
        if (newValue < 0 || newValue >= newMaxValue) {
            dispatch(setErrorAC({error: true}));
        } else {
            dispatch(setErrorAC({error: false}));
        }
    }


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingsModeAC({mode: true}))
        const newValue = +e.currentTarget.value
        setNewMaxValue(newValue)
        if (newValue <= 0 || newValue <= newStartValue || newStartValue < 0) {
            dispatch(setErrorAC({error: true}));
        } else {
            dispatch(setErrorAC({error: false}));
        }
    }


    const setSettingsHandler = () => dispatch(setSettingsAC({startValue: newStartValue, maxValue: newMaxValue}))

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
