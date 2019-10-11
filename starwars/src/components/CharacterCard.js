import React, { useState, useEffect, useReducer } from "react";
import Film from "./Film";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
background-color: #000000
color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  width: 90%;
  text-align: center;
`;

const Info = styled.div`
  padding: 0 5%;
  margin: 0;
  display: flex;
  flex-flow: row-nowrap;
  justify-content: space-between;

  p {
    margin: 1%;
  }
`;

const InfoAlt = styled(Info)`
  background-color: gray;
`

const FilmList = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: flex-end;
`

const CharacterCard = props => {
  const char = props.data;
  const [homeworld, setHomeworld] = useState();
  const [species, setSpecies] = useState();
  const [films, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.name];
      default:
        return state;
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${char.homeworld}`)
      .then(response => {
        setHomeworld(response.data.name);
      })

      .then(() => {
        axios
          .get(`${char.species}`)
          .then(response => {
            setSpecies(response.data.name);
          })

          .then(() => {
            //loop through array
            char.films.forEach(element => {
              axios.get(`${element}`).then(response => {
                // setFilms([...films, response.data.title]);

                dispatch({
                  type: "add",
                  name: response.data.title
                });
              });
            });
          });
      })
      .catch(e => {
        console.log("ERROR: " + e);
      });
  }, []);


  if (!films) {
    return <Card>Loading</Card>;
  } else {
    return (
      <Card>
        <h2>{props.data.name}</h2>
        <Info>
          <p>Birthyear: </p>
          <p>{char.birth_year}</p>
        </Info>

        <Info>
          <p>Homeworld: </p>
          <p>{homeworld}</p>
        </Info>

        <Info>
          <p>Species: </p>
          <p>{species}</p>
        </Info>

        <Info>
          <p>Films: </p>

        <FilmList>
          {films.map((element, index) => (
                <Film title={element} key={index}/>
        ))}
        </FilmList>
        </Info>
      </Card>
    );
  }
};

export default CharacterCard;
