import {InputHTMLAttributes} from "react";
import s from './InputWithLabel.module.css'

type InputWithLabelPropsType = {
    error: boolean
    label: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputWithLabel = ({onChange, value, error, label, type}: InputWithLabelPropsType) => {
    return (
        <div className={s.labelInput}>
            <label className={s.label}>{`${label}:`}</label>
            <input className={error ? s.error : s.input} onChange={onChange} type={type} value={value}/>
        </div>
    );
};

