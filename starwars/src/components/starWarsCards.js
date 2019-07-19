import React from "react";
import styled from 'styled-components';

export default function StarWarsCards (props) {
    
    const CardsStyles = styled.div`
        border: 1px solid black;
        width: 50%;
        margin-left: 25%;
        margin-bottom: 1%;
    `;
    const NameStyles = styled.h1`
        border: 1px solid black;
        background-color: grey;
        margin: 0;
        padding: 3%;
        text-shadow: 5px 2px 5px black;
        color: yellow;
        
    `;
    const AttributesStyles = styled.h5`
        border: 1px solid black;
        background-color: grey;
        margin: 0;
        padding: 10% 3%;
        text-shadow: 1px 1px 5px black;
        color: white;
        text-align: right;

    `;

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

  