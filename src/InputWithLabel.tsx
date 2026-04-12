import {ChangeEvent} from "react";

type InputWithLabelPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    error: boolean
    label: string
}

export const InputWithLabel = ({onChange, value, error, label}: InputWithLabelPropsType) => {
    return (
        <div className='labelInput'>
            <label className='label'>{`${label}:`}</label>
            <input className={error ? 'error' : 'input'} onChange={onChange} type="number" value={value}/>
        </div>
    );
};

