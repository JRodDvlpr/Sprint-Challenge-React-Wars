import React, {useState, useEffect} from "react";
import axios from "axios";
import SwCard from "../components/SWCard"
import styled from "styled-components";

const Card = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
background-color: white;
border: 1px dashed #000000;
max-width: 80%;
text-align: center;
`;

export default function SWcards () {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
          .then(arr => {
            const SWChar = arr.data.results;
            console.log(SWChar);
            setCards(SWChar);
          })
          .catch(err => console.log(`There error is: ${err}`));
          },[]);   

      return (
        <Card>
        {cards.map(card => {
          return (
            <SwCard
            key={card.name}
            birth={card.birth_year}
            img={card.url}
            sex={card.gender}
            name={card.name}
            hair={card.hair_color}
            height={card.height}
            eye={card.eye_color}
            />
          );
        })}
        </Card>
      );
}