import React, {useState, useEffect} from "react";
import axios from "axios";
import SwCard from "../components/SWCard"


export default function SWcards () {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(res => {
            const swChar = res.data.results;
            console.log(swChar);
            setCards(swChar);
          })
          .catch(err => console.log(`There error is: ${err}`));
          },[]);   

      return (
        <div>
        {cards.map(card => {
          return (
            <SwCard
            key={card.name}
            sex={card.gender}
            name={card.name}
            height={card.height}
            eye={card.eye_color}
            />
          );
        })}
        </div>
      );
}