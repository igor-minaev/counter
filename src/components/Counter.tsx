import React from 'react';
import {Display} from "./Display";
import {Button} from "./Button";

type CounterPropsType = {
    startValue: number
    maxValue: number
    count: number
    incrementCount: () => void
    resetCount: () => void
}

export const Counter: React.FC<CounterPropsType> = (
    {
        startValue,
        maxValue,
        count,
        incrementCount,
        resetCount
    }) => {
    return (
        <div className='counter'>
            <Display count={count} maxValue={maxValue}/>
            <div className='buttons'>
                <Button disabled={count === maxValue} name='inc' onClick={incrementCount}/>
                <Button disabled={count === startValue} name='reset' onClick={resetCount}/>
            </div>

        </div>
    );
};

