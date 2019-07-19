import React, { setState, useEffect } from "react";
import StarWarsCard from './starWarsCards';

const StarWarsNames = ({props}) => {
    
    return (
      <StarWarsCard>
          {props}
      </StarWarsCard>
    );
  };

  export default StarWarsNames;


