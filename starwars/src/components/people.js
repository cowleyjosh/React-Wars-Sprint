import React from 'react'
import styled from "styled-components"

 const StyledH2 = styled.h2`
  font-size: 3em;
  text-align: center;
  color: #F92028;
`;

const StyledH3 = styled.h3`
  font-size: 2em;
  text-align: center;
  color: #693294;
  font-weight: bold;
`;

const Container = styled.div`
    border: 3px solid black;
    margin: 20px;
    background-color: #C7C0C0;
    padding: 20px;
`;

const StyleP = styled.p`
    color: black;
    font-size: 2rem
    font-weight: bold;
`;

const People = (props) => {

return (     
<Container>
    <StyledH3 >{props.name} </StyledH3>
    
    <StyledH2>Character Traits</StyledH2>
        <StyleP>Eye Color: {props.eye}</StyleP>
        <StyleP>Birth Year: {props.birthday}</StyleP>
        <StyleP>Height: {props.height}</StyleP>

</Container>


)
}
export default People