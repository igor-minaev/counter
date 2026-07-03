import {useAppSelector} from "@/common/hooks/useAppSelector";
import {selectCounterValue, selectError, selectMaxValue, selectSettingsMode} from "../../../../model/counter-selectors";
import s from './CounterScreen.module.css'

export const CounterScreen = () => {
    const settingsMode = useAppSelector(selectSettingsMode)
    const error = useAppSelector(selectError)
    const counterValue = useAppSelector(selectCounterValue)
    const maxValue = useAppSelector(selectMaxValue)

    const content = settingsMode
        ? (error ? 'Incorrect' : 'enter values and press "set"')
        : counterValue

    const finalClassName = settingsMode
        ? (error ? s.error : s.message)
        : (counterValue === maxValue ? s.maxValue : '')

    return (
        <div className={s.counterScreen}>
            <p className={finalClassName}>{content}</p>
        </div>
    );
};

