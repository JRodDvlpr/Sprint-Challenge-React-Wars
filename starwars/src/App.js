import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SWList from "./SWList";


const Container = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center
justify-content: center;
`;

// const [next, setNext] = useState("https://swapi.co/api/people");
// const [apiData, setApiData] = useState();

function App() {

  const [chars, setChar] = useState([]);
  useEffect(() => {
    
    axios.get(`https://swapi.co/api/people`)
    .then(chars => {
      console.log(chars);
      setChar(chars.data.results);
    })
      .catch(err => console.log(err));
  }, []);
  // const next = () => {
  //   console.log(apiData.next);
  //   setEndpoint(apiData.next);
  // };
  // const prev = () => {
  //   if (apiData.previous) {
  //     setEndpoint(apiData.previous);
  //   } else {
  //     console.log("no previous page exists");
  //   }
  // };

  return (
    <Container className="App">
      <header>React Wars</header>
      <SWList className={chars}/>

    </Container>
  );
}

export default App;
