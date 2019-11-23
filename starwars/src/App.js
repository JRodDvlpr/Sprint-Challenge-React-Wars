import React from "react";
import styled from "styled-components";
import SWList from "./components/SWList";
// import SWCard from "./SWCard";

const Header = styled.h1`
font-size: 75px;
`

const Container = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center
justify-content: center;
`

function App() {

  
  return (
    <Container className="App">
      <Header>React Wars</Header>
      <SWList />

    </Container>
  );
}

export default App;
