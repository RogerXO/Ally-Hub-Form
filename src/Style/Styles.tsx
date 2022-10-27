import styled from 'styled-components'

interface InputProps {
    label: string,
    type: 'email' | 'text' | 'number',
    placeholder: string
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
    height: 65%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1px;
`

export const Form = styled.form`
    background-color: lightgrey;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const Parent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
`

export const Label = styled.label`
    font-size: 15px;
`

export const Input = styled.input.attrs<InputProps>(props => { type: { props.type } })`
    height: 5%;
    width: 70%;
    padding: 3px;

`

export const ReadyInput = (label: InputProps, type: InputProps, placeholder: InputProps) => {
    return (
        <Parent>
            <Label>{label.label}</Label>
            <Input type={type.type} placeholder={placeholder.placeholder}></Input>
        </Parent>
    )
}

export const Select = styled.select`
    
`