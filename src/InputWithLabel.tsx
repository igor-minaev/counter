import {InputHTMLAttributes} from "react";

type InputWithLabelPropsType = {
    error: boolean
    label: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputWithLabel = ({onChange, value, error, label, type}: InputWithLabelPropsType) => {
    return (
        <div className='labelInput'>
            <label className='label'>{`${label}:`}</label>
            <input className={error ? 'error' : 'input'} onChange={onChange} type={type} value={value}/>
        </div>
    );
};

