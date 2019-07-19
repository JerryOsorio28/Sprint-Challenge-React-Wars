import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Data (){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people`)
        .then(object =>{
         const namesArray = object.data.results
        //   console.log(object.data.results);
          setData(namesArray);
        })
        .catch(object =>{
          console.log('Ooops try again! :(')
        })
      }, [])

    return (
        <div>
           {console.log(namesArray)}
        </div>
    );
}