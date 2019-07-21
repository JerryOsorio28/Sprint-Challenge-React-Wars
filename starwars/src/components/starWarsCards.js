import React from "react";
import {CardsStyles, NameStyles, AttributesStyles} from './cardsStyle';

export default function StarWarsCards (props) {

    return (
      <CardsStyles>       
            <NameStyles>
                {props.data.name}
            </NameStyles>
            <AttributesStyles>
                <p>
                    Date of birth: {props.data.birth_year}
                </p>
                <p>
                    Eye Color: {props.data.eye_color}
                </p>
                <p>
                    Gender: {props.data.gender}
                </p>
                <p>
                    Hair Color: {props.data.hair_color}
                </p>
                <p>
                    Height: {props.data.height}
                </p>
                <p>
                    Skin Color {props.data.skin_color}
                </p>
            </AttributesStyles>
      </CardsStyles>
    );
  };

  