import {ButtonHTMLAttributes} from "react";
import s from './Button.module.css'

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, ...restProps}: ButtonPropsType) => {
    return (
        <button className={s.button} {...restProps}>{children}</button>
    );
};

