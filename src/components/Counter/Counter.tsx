import React from 'react';
import s from './Counter.module.css'
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {SuperButton} from "../SuperButton/SuperButton";

type CounterPropsType = {
    count: number
    maxValue: number
    incrementCount: () => void
    resetCount: () => void
}

export const Counter = (props:CounterPropsType) => {
    return (
        <div className={s.counter}>
           <CounterDisplay count={props.count} maxValue={props.maxValue}/>
            <div className={s.buttons}>
                <SuperButton disabled={props.count === props.maxValue} callBack={props.incrementCount}>inc</SuperButton>
                <SuperButton disabled={props.count === 0} callBack={props.resetCount}>reset</SuperButton>
            </div>
        </div>
    );
};

