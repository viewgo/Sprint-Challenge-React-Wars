import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const Container = styled.div`
    margin: 0 auto;
  `;
  const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
  `;

  const [data, setData] = useState();

  useEffect(() => {
    console.log("hello");
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(e => {
        console.log("Error: " + e);
      });
  }, []);

  // console.log(data);
  return (
    <Container>
      <App>
        <h1 className="Header">React Wars</h1>
        <CharacterList data={data} />
      </App>
    </Container>
  );
};

export default App;
