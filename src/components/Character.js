// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledChar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.thirdColor};
    width: 43%;
    height: 10vh;
    border: 3px solid black;
    text-shadow: 1px 1px 5px white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 10%;
    height: 8vh;
    font-size: 1.3rem;
    color: ${(pr) => pr.theme.thirdColor};

    background-color: ${(pr) => pr.theme.primaryColor};
  }
  ul {
    color: black;
    background-color: ${(pr) => pr.theme.thirdColor};
    width: 40%;
    border: 3px solid black;
    align-items: flex-start;
    font-size: 1.5rem;
    margin-right: 0px;
  }
  p {
    display: flex;
  }
  h3 {
    display: flex;
  }
`;

const Character = (props) => {
       console.log(props);
    const { info, openDetails } = props;
  
    return (
      <StyledChar className = "starWars">
        <h1>{props.info.name} {props.info.birth_year}</h1>
       
          
  
          {/* <button onClick={() => openDetails(info.name)}>See details</button> */}
  
        {/* {props.info.name} */}
      </StyledChar>
    );
  };
  
  export default Character;
