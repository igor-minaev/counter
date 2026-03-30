import {ButtonHTMLAttributes} from "react";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, ...restProps}: ButtonPropsType) => {
    return (
        <button {...restProps}>{children}</button>
    );
};

