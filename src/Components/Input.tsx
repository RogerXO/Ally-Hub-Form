import { ReactNode } from "react"

import { InputField, Label, Parent, Span } from "../Style/Styles"

export type InputProps = {
    label?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    spanText?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    children?: JSX.Element | JSX.Element[] | ReactNode;
    color: 'success' | 'error';
}

export const Input = ({ label, type, placeholder, value, spanText, onChange, color = 'error', children }: InputProps) => {
    return (
        <Parent>
            <Label>{label}</Label>
            <InputField type={type} placeholder={placeholder} value={value} onChange={onChange}></InputField>
            <Span color={color}>{spanText}</Span>
        </Parent>
    )
}