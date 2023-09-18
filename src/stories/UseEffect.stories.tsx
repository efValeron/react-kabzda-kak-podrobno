import styled from "styled-components";
import {useEffect, useState} from "react";

export default {
  title: 'useEffect',
};

const Wrapper = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
`

export const SimpleExample = () => {
  console.log("rendering")
  const [counter, setCounter] = useState(0)
  const [fake, setFake] = useState(0)

  useEffect(() => {
    console.log("use effecting")
    document.title = counter.toString()
  }, [counter])

  return (
    <Wrapper>
      <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
      <button onClick={() => setFake(prevState => prevState + 1)}>+ fake</button>
      <h3>{counter}</h3>
      <h3>{fake}</h3>
    </Wrapper>
  )
}

export const TimeoutExample = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      document.title = new Date().toLocaleTimeString()
    }, 1000)
  }, [])

  return (
    <Wrapper>
      <h3>{time}</h3>
      {/*<button onClick={() => setCounter(prevState => prevState + 1)}>+</button>*/}
      {/*<h3>{counter}</h3>*/}
    </Wrapper>
  )
}