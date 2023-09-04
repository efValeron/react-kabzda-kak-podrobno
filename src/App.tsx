import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      <h1>Hello world</h1>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`