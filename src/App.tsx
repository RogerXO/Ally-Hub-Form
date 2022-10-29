import { useState, useEffect } from "react"
import { Button } from "./Components/Button"
import { Input } from "./Components/Input"

import { Container, Form, FormDiv, InputField, Label, Parent, Select, ValidationSpan } from "./Style/Styles"

interface ICountryFetch {
  code: string,
  name: string,
  name_ptbr: string
}

interface ICityFetch {
  code: string,
  country_code: string,
  id: number,
  name: string,
  name_ptbr: string
}

const App = () => {

  const [countries, setCountries] = useState<ICountryFetch[]>([])
  const [cities, setCities] = useState<ICityFetch[]>([])

  const [selectedCountry, setSelectedCountry] = useState<string>()
  const [selectedCity, setSelectedCity] = useState<string>()
  const [filteredCities, setFilteredCities] = useState<ICityFetch[]>([])

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [cpf, setCpf] = useState<string>("")

  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [spanColor, setSpanColor] = useState<"success" | "error">("error")

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

  //Cities fetch
  useEffect(() => {
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

  useEffect(() => {
    const filterCities = () => {
      return cities.filter((city) => {
        return city.country_code == selectedCountry
      })
    }

    setFilteredCities(filterCities)
  }, [selectedCountry])

  const validationError = () => {
    setIsDisabled(true)
    setSpanColor("error")
  }

  const validationSuccess = () => {
    setIsDisabled(false)
    setSpanColor("success")
  }

  //Fields validation
  useEffect(() => {
    if (name.length < 4) return validationError()
    if (email.length < 10) return validationError()
    if (phoneNumber.length < 11) return validationError()
    if (cpf.length < 11) return validationError()
    if (!selectedCity) return validationError()
    if (!selectedCountry) return validationError()

    validationSuccess()
  }, [name, email, phoneNumber, cpf, selectedCountry, selectedCity])

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    return
  }

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
          ></Input>

          <Input
            label="Email"
            type="email"
            placeholder="email"
            value={email}
            spanText="Pelo menos 10 caracteres"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <Input
            label="Telefone"
            type="tel"
            placeholder="31912345678"
            value={phoneNumber}
            spanText="Pelo menos 11 caracteres"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Input>

          <Input
            label="CPF"
            type="number"
            placeholder="12345678912"
            value={cpf}
            spanText="Pelo menos 11 caracteres"
            onChange={(e) => setCpf(e.target.value)}
          ></Input>

          <Parent>
            <Label>Pais</Label>
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
            <Label>Cidade</Label>
            <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              <option value='' hidden>{
                !selectedCountry ? "Primeiro, selecione um pais" : "Selecione uma cidade"
              }</option>
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

          <Button onClick={handleButtonClick} disabled={isDisabled}>
            Enviar
          </Button>

        </Form>
      </FormDiv>
    </Container>
  )
}

export default App