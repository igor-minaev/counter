type CounterScreenPropsType = {
    counterValue: number
    maxValue: number
}

export const CounterScreen = ({counterValue, maxValue}: CounterScreenPropsType) => {

    const maxValueClassName = counterValue === maxValue ? 'maxValue' : ''

    return (
        <div className='counterScreen'>
            <span className={maxValueClassName}>{counterValue}</span>
        </div>
    );
};

