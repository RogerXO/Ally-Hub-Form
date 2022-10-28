import { useState, useEffect } from "react"

import { Button, Container, Form, FormDiv, Input, Label, Parent, Select } from "./Style/Styles"

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
  const [filteredCities, setFilteredCities] = useState<ICityFetch[]>([])

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
            <Select>
              <option value='' hidden>{!selectedCountry ? "Selecione um pais primeiramente" : "Selecione uma cidade"}</option>
              {selectedCountry && filteredCities.map((city, index) => {
                return (
                  <option key={index} value={city.id}>{city.name}</option>
                )
              })}
            </Select>
          </Parent>

        </Form>

        <Button>Enviar</Button>

      </FormDiv>
    </Container>
  )
}

export default App