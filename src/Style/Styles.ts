import { ReactNode } from 'react'

import styled, { css } from 'styled-components'

import { ButtonProps } from './../Components/Button';


interface IInputProps {
    label: string,
    type: 'email' | 'text' | 'number',
    placeholder: string
}

interface ISelect {
    children?: ReactNode
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
    justify-content: space-evenly;
    margin-bottom: 2%;
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

export const Input = styled.input.attrs<IInputProps>(props => { type: { props.type } })`
    height: 100%;
    width: 75%;
    padding: 5px;
`

// export const ReadyInput = (label: InputProps, type: InputProps, placeholder: InputProps) => {
//     return (
//         <Parent>
//             <Label>{label.label}</Label>
//             <Input type={type.type} placeholder={placeholder.placeholder}></Input>
//         </Parent>
//     )
// }

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
    outline: none;
    transition: all 0.2s;
    color: rgb(36, 119, 36);
    background-color: rgb(170, 214, 170);

    ${(props) => props.disabled && DISABLED};
`

const DISABLED = css`
    cursor: not-allowed;
    background-color: #d4d4d4;
    color: #f5f5f5;
`;