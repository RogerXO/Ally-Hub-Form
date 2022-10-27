import { Container, Form, FormDiv, Input, Label, Parent, Select } from "./Style/Styles"



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
      {/* <ReadyInput label='Nome' type="text" placeholder="Nome completo" /> */}
      <FormDiv>
        <div>Dados pessoais</div>
        <Form>

          <Parent>
            <Label>Nome</Label>
            <Input type="text" placeholder="Nome" />
          </Parent>

          <Parent>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </Parent>

          <Parent>
            <Label>Telefone</Label>
            <Input type="tel" placeholder="31912345678" />
          </Parent>

          <Parent>
            <Label>CPF</Label>
            <Input type="number" placeholder="12345678912" />
          </Parent>

          <Parent>
            <Label>Pais</Label>
            <Select>
              <option value='' hidden>Selecione</option>
              <option value=''>Brazil</option>
              <option value=''>Brasil do Norte</option>
              <option value=''>Brasil do Sul</option>
            </Select>
          </Parent>

          <Parent>
            <Label>Cidade</Label>
            <Select>
              <option value='' hidden>Selecione</option>
            </Select>
          </Parent>

        </Form>
      </FormDiv>
    </Container>
  )
}

export default App
