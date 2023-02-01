import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    callBack: () => void
    disabled: boolean
    children?: React.ReactNode
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {callBack, disabled, children, ...restProps} = props
    const onClickHandler = () => {
        callBack()
    }
    const finalClassName = `${s.button} ${disabled ? s.disabled : ''}`
    return (
        <button className={finalClassName} disabled={disabled} onClick={onClickHandler}>{children}</button>
    );
};

