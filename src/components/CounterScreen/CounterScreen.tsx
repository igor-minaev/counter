import s from './CounterScreen.module.css'

type CounterScreenPropsType = {
    counterValue: number
    maxValue: number
    settingsMode: boolean
    error: boolean
}

export const CounterScreen = ({counterValue, maxValue, settingsMode, error}: CounterScreenPropsType) => {

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

