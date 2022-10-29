import { ReactNode } from 'react'

import styled, { css } from 'styled-components'
import { InputProps } from '../Components/Input';

import { ButtonProps } from './../Components/Button';


interface IInputProps {
    label: string,
    type: 'email' | 'text' | 'number',
    placeholder: string
}

interface ISelect {
    children?: ReactNode
}

type SpanProps = {
    color: "success" | "error"
}

export const Container = styled.div`
    background-color: rgba(132, 162, 172, 0.493);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormDiv = styled.div`
    background-color: white;
    height: 75%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        margin-top: 5%;
    }

    button{
        margin-bottom: 5%;
    }
`

export const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Parent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-left: 15%;
`

export const Label = styled.label`
    font-size: 15px;
`

export const InputField = styled.input.attrs<IInputProps>(props => { type: { props.type } })`
    height: 100%;
    width: 75%;
    padding: 5px;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
`

export const Span = styled.span<InputProps>`
    font-size: 11px;
    color: black ;
    transition: all 1seg;

    ${(props) => props.color && COLOR[props.color]}
`

export const ValidationSpan = styled.span<SpanProps>`
    transition: all 1seg;
    font-size: 11px;
    align-self: center;
    margin: 3% 0 1%;

    ${(props) => props.color && COLOR[props.color]}
`

const COLOR = {
    error: css`
    color: red
    `,
    success: css`
    color: rgb(36, 119, 36)
    `
}

export const Select = styled.select<ISelect>`
    width: 78%;
    padding: 5px;

    option{
        min-height: 20px;
        padding: 3px;
    }
`

export const ButtonContainer = styled.button<ButtonProps>`
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    font-weight: bold;
    font-size: 16px;
    align-self: center;
    outline: none;
    color: rgb(36, 119, 36);
    background-color: rgb(170, 214, 170);
    transition: all 1s;

    ${(props) => props.disabled && DISABLED};
`

const DISABLED = css`
    cursor: not-allowed;
    background-color: #d4d4d4;
    color: #f5f5f5;
`;

