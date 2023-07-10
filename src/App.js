import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character,setCharacter] = useState([]);
  const [currentCharacterName,setCurrentCharacterName] = useState(null);

  const openDetails = (name) => {
    setCurrentCharacterName(name);
  }

  const closeDetails = () => {
    setCurrentCharacterName(null); 
  }
  

  useEffect(() => {
    const fetchCharacters = () => {
    axios
       .get('https://swapi.dev/api/people/')
       .then(res => {
        console.log(res.data);
          setCharacter(res.data);
       })
       .catch((error) => {
        debugger;
       })
      }
      fetchCharacters();
  },[])

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {character.map((pr) => {
        return (
          <Character
            key={pr.name}
            info={pr}
            character={character}
            openDetails={openDetails}
          />
        );
      })}
    </div>
  );
};


 

export default App;
