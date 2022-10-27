import { useState, useEffect } from "react"

import { Container, Form, FormDiv, Input, Label, Parent, Select } from "./Style/Styles"

interface ICountryFetch {
  code: string,
  name: string,
  name_ptbr: string
}

const App = () => {

  const [countries, setCountries] = useState<ICountryFetch[]>([])
  const [cities, setCities] = useState([])

  // const ReadyInput = (label: string, type: InputProps, placeholder: string) => {
  //   return (
  //     <Parent>
  //       <Label>{label}</Label>
  //       <Input type={type.type} placeholder={placeholder}></Input>
  //     </Parent>
  //   )
  // }


  //Countries fetch
  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country", {
      method: 'GET',
      headers: {
        "Content-type": "Application/json"
      }
    }).then(resp => resp.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
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
              {countries.map((country, index) => {
                return (
                  <option key={index} value={index}>{country.name_ptbr}</option>
                )
              })}
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
