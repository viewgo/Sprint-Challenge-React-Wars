import React from 'react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharacterList = props => {

    const CardList = styled.div`
        display: grid;
        grid-template-columns: 40% 40%;
        grid-template-rows: auto;
        justify-content: center;
        justify-items: center;
        align-items: stretch;
        align-content: start;
        grid-gap: 15px 30px;
        width: 100%;

        @media (max-width: 800px){
            grid-template-columns: 80%;
        }
    `

    
  
    if (!props.data) {
    return <div className="loading">Loading...</div>;
  } 
  
  else {
    return (
      <CardList>
        {props.data.results.map((element, index) => (
          <CharacterCard key={index} data={element} />
        ))}
      </CardList>
    );
  }
  
};

export default CharacterList;
