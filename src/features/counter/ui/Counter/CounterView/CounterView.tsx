import {Button} from "@/common/components/Button/Button";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {increaseCounterAC, resetCounterAC} from "../../../model/counter-reducer";
import {selectCounterValue, selectError, selectMaxValue, selectStartValue} from "../../../model/counter-selectors";
import {CounterScreen} from "./CounterScreen/CounterScreen.tsx";
import s from './CounterView.module.css'

export const CounterView = () => {
    const counterValue = useAppSelector(selectCounterValue)
    const maxValue = useAppSelector(selectMaxValue)
    const startValue = useAppSelector(selectStartValue)
    const error = useAppSelector(selectError)

    const dispatch = useAppDispatch()

    const increaseCounterValue = () => {
        if (error) return
        dispatch(increaseCounterAC())
    }
    const resetCounterValue = () => {
        dispatch(resetCounterAC())
    }
    console.log(error)

    const isIncreaseDisabledBtn = counterValue === maxValue || error
    const isResetDisabledBtn = counterValue === startValue
    return (
        <div className='counter'>
            <CounterScreen/>
            <div className={s.buttonsWrapper}>
                <Button disabled={isIncreaseDisabledBtn} onClick={increaseCounterValue}>inc</Button>
                <Button disabled={isResetDisabledBtn} onClick={resetCounterValue}>reset</Button>
            </div>
        </div>
    );
};

