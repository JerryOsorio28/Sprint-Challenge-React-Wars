import React from "react";
import styled from 'styled-components';

export default function StarWarsCards (props) {
    
    const CardsStyles = styled.div`
        border: 1px solid black;
        width: 70%;
        margin-left: 15%;
        margin-bottom: 5%;
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
        padding: 3%;
        text-shadow: 1px 1px 5px black;
        color: white;
        text-align: right;

    `;

    return (
      <CardsStyles>
        <div className = 'person'>
            <NameStyles>
                {props.data.name}
            </NameStyles>
            <AttributesStyles>
                <div className='birth_year'>
                    Date of birth: {props.data.birth_year}
                </div>
                <div className='eye_color'>
                    Eye Color: {props.data.eye_color}
                </div>
                <div className='gender'>
                    Gender: {props.data.gender}
                </div>
                <div className='hair_color'>
                    Hair Color: {props.data.hair_color}
                </div>
                <div className='height'>
                    Height: {props.data.height}
                </div>
                <div className='skin_color'>
                    Skin Color {props.data.skin_color}
                </div>
            </AttributesStyles>
        </div>
      </CardsStyles>
    );
  };

  