import React from "react";
import styled from "styled-components";



const ListButtons = props => {
  

    const ButtonsDiv = styled.div`
display: flex;
flex-flow: row-nowrap;
justify-content: space-evenly;
width: 100%;
margin-bottom: 20px;
`

const Button = styled.button`
border: 0;
background-color: #482818;
color: #CECBC6;
width: 100px;
text-align: center;
padding: 10px;

`
    return (
      <ButtonsDiv>
      <Button name="Previous" onClick={e => props.onClick(e.target.name)}>Previous</Button>
      <Button name="Next" onClick={e => props.onClick(e.target.name)}>Next</Button>
      </ButtonsDiv>
    );
  
};

export default ListButtons;
