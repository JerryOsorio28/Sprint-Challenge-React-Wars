import React from "react";
// import styled from 'styled-components';

export default function StarWarsCards  ({props}) {
    
    // const CardsStyles = styled.div`
    //     border: 1px solid red;
    //     width: 500px;
    //     height: 500px;
    
    // `;

    return (
      <div className='Cards'>
      {props}
      </div>
    );
  };

  