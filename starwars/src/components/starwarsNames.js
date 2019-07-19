import React, { setState, useEffect } from "react";
import StarWarsCard from './starWarsCards';
import axios from 'axios';
// import {NamesArray} from './namesArray'

export default function StarWarsNames(){
    // STEP 2 - add the imported data to state
    let [data, setData] = setState({})

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people`)
        .then(object =>{
          data = object.data.results
          console.log(object.data.results);
          setData(data);
        })
        .catch(object =>{
          console.log('Ooops try again! :(')
        })
      }, [])

    return (
      
      <div>
        {data.map((object) =><StarWarsCard key = '' names = {object}/>)
}
      </div>
    );
  };


