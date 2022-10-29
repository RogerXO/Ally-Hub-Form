import { useState, useEffect } from "react"
import { Button } from "./Components/Button"
import { Input } from "./Components/Input"

import { Container, Form, FormDiv, InputField, Label, Parent, Select, ValidationSpan } from "./Style/Styles"

interface ICountryFetch {
  code: string,
  name_ptbr: string
}

interface ICityFetch {
  country_code: string,
  id: number,
  name: string,
}

interface InputState {
  color: "success" | "error",
  disabled: boolean
}

const App = () => {

  const [countries, setCountries] = useState<ICountryFetch[]>([])
  const [cities, setCities] = useState<ICityFetch[]>([])

  const [selectedCountry, setSelectedCountry] = useState<string>()
  const [selectedCity, setSelectedCity] = useState<string>()
  // const [filteredCities, setFilteredCities] = useState<ICityFetch[]>([])

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [cpf, setCpf] = useState<string>("")

  const isNameInvalid = name.length < 4
  const isEmailInvalid = email.length < 10
  const isPhoneNumberInvalid = phoneNumber.length < 11
  const isCpfInvalid = cpf.length < 11

  const filteredCities: ICityFetch[] = selectedCountry
    ? cities.filter((city) => {
      return city.country_code == selectedCountry
    })
    : []

  //Input validations
  const getSubmitState = (): InputState => {
    if (isNameInvalid) return validationError()
    if (isEmailInvalid) return validationError()
    if (isPhoneNumberInvalid) return validationError()
    if (isCpfInvalid) return validationError()
    if (!selectedCity) return validationError()
    if (!selectedCountry) return validationError()

    return { color: "success", disabled: false }
  }

  const validationError: () => InputState = () => {
    return { color: "error", disabled: true }
  }

  const spanColor = getSubmitState().color
  const isDisabled = getSubmitState().disabled

  console.log('renderizou')

  //Countries and cities fetch
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


    fetch("https://amazon-api.sellead.com/city", {
      method: 'GET',
      headers: {
        "Content-Type": "Application/json"
      }
    }).then(resp => resp.json())
      .then(data => {
        setCities(data)
      })
      .catch(err => console.log(err))
  }, [])

  // useEffect(() => {
  //   const filterCities = () => {
  //     return cities.filter((city) => {
  //       return city.country_code == selectedCountry
  //     })
  //   }

  //   setFilteredCities(filterCities)
  // }, [selectedCountry])

  return (
    <Container>
      <FormDiv>
        <div>Dados pessoais</div>

        <Form>

          <Input
            label="Nome"
            type="text"
            placeholder="Nome"
            value={name}
            spanText="Pelo menos 4 caracteres"
            onChange={(e) => setName(e.target.value)}
            color={isNameInvalid ? "error" : "success"}
          ></Input>

          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            spanText="Pelo menos 10 caracteres"
            onChange={(e) => setEmail(e.target.value)}
            color={isEmailInvalid ? "error" : "success"}
          ></Input>

          <Input
            label="Telefone"
            type="tel"
            placeholder="31912345678"
            value={phoneNumber}
            spanText="Pelo menos 11 caracteres"
            onChange={(e) => setPhoneNumber(e.target.value)}
            color={isPhoneNumberInvalid ? "error" : "success"}
          ></Input>

          <Input
            label="CPF"
            type="number"
            placeholder="12345678912"
            value={cpf}
            spanText="Pelo menos 11 caracteres"
            onChange={(e) => setCpf(e.target.value)}
            color={isCpfInvalid ? "error" : "success"}
          ></Input>

          <Parent>
            <Label>Pais destino:</Label>
            <Select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} >
              <option value='' hidden>Selecione</option>
              {countries.map((country, index) => {
                return (
                  <option key={index} value={country.code}>{country.name_ptbr}</option>
                )
              })}
            </Select>
          </Parent>

          <Parent>
            <Label>Cidade destino:</Label>
            <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              <option value='' hidden>
                {!selectedCountry
                  ? "Primeiro, selecione um pais"
                  : filteredCities.length == 0
                    ? "Nenhuma cidade cadastrada"
                    : "Selecione uma cidade"
                }
              </option>
              {selectedCountry && filteredCities.map((city, index) => {
                return (
                  <option key={index} value={city.id}>{city.name}</option>
                )
              })}
            </Select>
          </Parent>

          <ValidationSpan color={spanColor}>
            {isDisabled ? "Preencha todos os campos corretamente" : "Todos os campos foram preenchidos"}
          </ValidationSpan>

          <Button disabled={isDisabled}>
            Enviar
          </Button>

        </Form>
      </FormDiv>
    </Container>
  )
}

export default App