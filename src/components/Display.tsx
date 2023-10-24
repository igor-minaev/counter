import React from 'react';

type DispalyPropsType = {
    count: number
    maxValue: number
}

export const Display: React.FC<DispalyPropsType> = ({count, maxValue}) => {
    return (
        <div>
            <div className={count === maxValue ? 'active' : ''}>{count}</div>
        </div>
    );
};

