import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCards from './components/starWarsCards';

export default function Data () {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    let [data, setData] = useState([])
    
  
    useEffect(() => {
      axios
      .get(`https://henry-mock-swapi.herokuapp.com/api`)
      .then(object =>{
        data = object.data.results
        // console.log(data)
        setData(data);

      })
      .catch(object =>{
        console.log('Ooops try again! :(')
      })
    }, [])
  
    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
  
    return (
        <div className = 'Container'>
            {data.map(object => <StarWarsCards data ={object}/>)} 
        </div>
            
    );
  }