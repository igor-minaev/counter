import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, onClick, disabled}) => {
    const onClickHandler = () => onClick()
    return (
        <button className={`button ${disabled ? 'disabled' : ''}`} disabled={disabled} onClick={onClickHandler}>{name}</button>
    );
};

