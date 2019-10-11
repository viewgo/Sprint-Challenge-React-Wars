import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import ListButtons from "./components/ListButtons";
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
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    console.log("hello");
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(e => {
        console.log("Error: " + e);
      });
  }, [page]);

  const onClick = button => {
    if (button === "Next") {
      //next set of data
      console.log("Next button clicked");

      if (page < 9) {
        setPage(page => page + 1);
      }
    } else if (button === "Previous") {
      //previous data
      console.log("Previous button clicked");

      if (page > 1) {
        setPage(page => page - 1);
      }
    }

    // //NOT WORKING
    // if (calc === "error") {
    //   console.log("error before click");
    //   setCalc("");
    // }

    // if (button === "=") {
    //   calculate();
    // } else if (button === "+/-") {
    //   if (calc.charAt(0) === "-") {
    //     setCalc(calc.substr(1));
    //   } else {
    //     setCalc("-" + calc);
    //   }
    // } else if (button === "C") {
    //   reset();
    // }
    // else {
    //   setCalc(calc + button);
    // }
  };

  // console.log(data);
  return (
    <Container>
      <App>
        <h1 className="Header">React Wars</h1>
        <ListButtons onClick={onClick} />
        <CharacterList data={data} />
      </App>
    </Container>
  );
};

export default App;
