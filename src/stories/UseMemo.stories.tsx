import React from "react";
import styled from "styled-components";

export default {
  title: 'useMemo',
};

const Wrapper = styled.div`
  font-family: sans-serif;
`

export const ExpensiveCalculation = () => {
  const [a, setA] = React.useState(5)
  const [b, setB] = React.useState(3)

  let factorialA = 1
  let factorialB = 1

  factorialA = React.useMemo(() => {
    console.log("rendering A")
    let resultA = factorialA
    for (let i = 2; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake += Math.random()
      }
      resultA *= i
    }
    return resultA
  }, [a, factorialA])

  factorialB = React.useMemo(() => {
    console.log("rendering B")
    let resultB = factorialB
    for (let i = 2; i <= b; i++) {
      resultB *= i
    }
    return resultB
  }, [b, factorialB])


  return (
    <Wrapper>
      <input type="number" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input type="number" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
      <hr/>
      <div>
        Result a: {factorialA}
      </div>
      <div>
        Result b: {factorialB}
      </div>
    </Wrapper>
  )
}

type CitiesType = {
  id: number
  name: string
  countryId: number
  population: number
}

const select = ({id, value, data, setValue}: { id: number, value: string, data: CitiesType[], setValue: (value: string) => void }) => {
  console.log("rendering", id, "select")
  return (
    <select key={id} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
      {
        data.map(c => <option key={c.id} value={c.name}>{c.name} {c.countryId} {c.population}</option>)
      }
    </select>
  )
}

const Select = React.memo(select)

export const CitiesCase = () => {
  const [cities, setCities] = React.useState<CitiesType[]>([
    {id: 1, name: "Moscow", countryId: 1, population: 500},
    {id: 2, name: "Rostov", countryId: 1, population: 144},
    {id: 3, name: "Minsk", countryId: 2, population: 120},
    {id: 4, name: "Kyev", countryId: 3, population: 100000},
    {id: 5, name: "Grodno", countryId: 2, population: 98},
  ])

  const [select1, setSelect1] = React.useState("")
  const [select2, setSelect2] = React.useState("")
  const [select3, setSelect3] = React.useState("")

  const filteredByCountryId = React.useMemo(() => {
    const data = cities.filter(c => c.countryId === 2)
    return <Select id={1} value={select1} data={data} setValue={setSelect1}/>
  }, [select1, setSelect1, cities])

  const filteredByName = React.useMemo(() => {
    const data = cities.filter(c => c.name.toLowerCase().indexOf("m") > -1)
    return <Select id={2} value={select2} data={data} setValue={setSelect2}/>
  }, [select2, setSelect2, cities])

  const filteredByPopulation = React.useMemo(() => {
    const data = cities.filter(c => c.population >= 130)
    return <Select id={3} value={select3} data={data} setValue={setSelect3}/>
  }, [select3, setSelect3, cities])

  return (
    <Wrapper>
      {filteredByCountryId}
      {filteredByName}
      {filteredByPopulation}
      <button onClick={()=>{setCities([...cities, {id: 6, name: "london", countryId: 4, population: 1491481578}])}}>add city</button>
    </Wrapper>
  )
}