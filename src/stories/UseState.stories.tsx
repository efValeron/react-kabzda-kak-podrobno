import styled from "styled-components";
import {useState} from "react";

export default {
  title: 'useState',
};

const Wrapper = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
`

const generateExpensiveNumber = () => {
  console.log("generating")
  let fake = 0
  while (fake < 1000000000) {
    fake += 1
  }
  console.log("done")
  return Math.round(fake)
}

export const CounterExample = () => {
  console.log("rendering")
  const [counter, setCounter] = useState(generateExpensiveNumber)

  return (
    <Wrapper>
      <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
      <h3>{counter}</h3>
    </Wrapper>
  )
}