import { ReactNode } from 'react'
import styled from 'styled-components'


interface IInputProps {
    label: string,
    type: 'email' | 'text' | 'number',
    placeholder: string
}

interface ISelect {
    children?: JSX.Element | JSX.Element[] | ReactNode
}

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #575454;
`

export const FormDiv = styled.div`
    background-color: lightgrey;
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

export const Button = styled.button`
    padding: 10px;
    margin: auto;
    
`