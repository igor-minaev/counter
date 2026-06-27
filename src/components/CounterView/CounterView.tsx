import {CounterScreen} from "../CounterScreen/CounterScreen.tsx";
import {Button} from "../Button/Button.tsx";
import s from './CounterView.module.css'

type CounterViewPropsType = {
    counterValue: number
    maxValue: number
    isIncreaseDisabledBtn: boolean
    isResetDisabledBtn: boolean
    increaseCounterValue: () => void
    resetCounterValue: () => void
    settingsMode: boolean
    error: boolean
}

export const CounterView = ({
                                counterValue,
                                maxValue,
                                isIncreaseDisabledBtn,
                                isResetDisabledBtn,
                                increaseCounterValue,
                                resetCounterValue,
                                settingsMode,
                                error
                            }: CounterViewPropsType) => {
    return (
        <div className='counter'>
            <CounterScreen settingsMode={settingsMode} error={error} counterValue={counterValue} maxValue={maxValue}/>
            <div className={s.buttonsWrapper}>
                <Button disabled={isIncreaseDisabledBtn} onClick={increaseCounterValue}>inc</Button>
                <Button disabled={isResetDisabledBtn} onClick={resetCounterValue}>reset</Button>
            </div>
        </div>
    );
};

