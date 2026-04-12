import s from './CounterScreen.module.css'

type CounterScreenPropsType = {
    counterValue: number
    maxValue: number
}

export const CounterScreen = ({counterValue, maxValue}: CounterScreenPropsType) => {

    const maxValueClassName = counterValue === maxValue ? s.maxValue : ''

    return (
        <div className={s.counterScreen}>
            <span className={maxValueClassName}>{counterValue}</span>
        </div>
    );
};

