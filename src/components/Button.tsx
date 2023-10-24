import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = ({name, onClick}) => {
    const onClickHandler = () => onClick()
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

