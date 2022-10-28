import { useState, useEffect } from "react"
import { Button } from "./Components/Button"

import { Container, Form, FormDiv, Input, Label, Parent, Select } from "./Style/Styles"

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

  //Fields validation
  useEffect(() => {
    if (name.length < 4) return
    if (email.length < 10) return
    if (phoneNumber.length < 11) return
    if (cpf.length < 11) return
    if (!selectedCity) return
    if (!selectedCountry) return


    setIsDisabled(false)
  }, [name, email, phoneNumber, cpf, selectedCountry, selectedCity])

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    return
  }


  return (
    <Container>
      <FormDiv>
        <div>Dados pessoais</div>

        <Form>

          <Parent>
            <Label>Nome</Label>
            <Input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </Parent>

          <Parent>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Parent>

          <Parent>
            <Label>Telefone</Label>
            <Input type="number" placeholder="31912345678" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Parent>

          <Parent>
            <Label>CPF</Label>
            <Input type="number" placeholder="12345678912" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </Parent>

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

        </Form>


        <Button onClick={handleButtonClick} disabled={isDisabled}>
          Enviar
        </Button>

      </FormDiv>
    </Container>
  )
}

export default App