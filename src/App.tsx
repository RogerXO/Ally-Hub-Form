import { Container, Form, FormDiv, Input, ReadyInput } from "./Style/Styles"



const App = () => {

  // const ReadyInput = (label: string, type: InputProps, placeholder: string) => {
  //   return (
  //     <Parent>
  //       <Label>{label}</Label>
  //       <Input type={type.type} placeholder={placeholder}></Input>
  //     </Parent>
  //   )
  // }

  return (
    <Container>
      <FormDiv>
        <div>Dados pessoais</div>
        <Form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="number" placeholder="31912345678" />
          <Input type="number" placeholder="12345678912" />
          <ReadyInput label='Nome' type="text" placeholder="Nome completo" ></ReadyInput>
        </Form>
      </FormDiv>
    </Container>
  )
}

export default App
