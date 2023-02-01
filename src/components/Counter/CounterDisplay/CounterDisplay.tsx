import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    count: number
    maxValue: number
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    const displayStyle = props.count === props.maxValue ? `${s.display} ${s.active}` : s.display
    return (
        <div className={displayStyle}>{props.count}</div>
    );
};

