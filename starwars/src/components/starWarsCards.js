import React from "react";
import {CardsStyles, NameStyles, AttributesStyles} from './cardsStyle';

export default function StarWarsCards (props) {

    return (
      <CardsStyles>
            <NameStyles>
                {props.data.name}
            </NameStyles>
            <AttributesStyles>
                <div>
                    Date of birth: {props.data.birth_year}
                </div>
                <div>
                    Eye Color: {props.data.eye_color}
                </div>
                <div>
                    Gender: {props.data.gender}
                </div>
                <div>
                    Hair Color: {props.data.hair_color}
                </div>
                <div>
                    Height: {props.data.height}
                </div>
                <div>
                    Skin Color {props.data.skin_color}
                </div>
            </AttributesStyles>
      </CardsStyles>
    );
  };

  