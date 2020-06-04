import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PaletteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 5px;

  @media (max-width: 1000px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }

  @media (max-width: 605px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 0;
    justify-items: center;
    grid-row-gap: 5px;
  }
`

const PeletteElement = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-start;
`

const PaletteText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`

const Palette = ({ palette, showPalette }) => (
  <React.Fragment>
    {showPalette && (
      <PaletteContainer>
        {palette.map((hexValue, index) => {
          return (
            <PeletteElement key={index} className="palette-element" style={{ backgroundColor: hexValue }}>
              <PaletteText className="palette-text">{hexValue}</PaletteText>
            </PeletteElement>
          )
        })}
      </PaletteContainer>
    )}
  </React.Fragment>
)

export default Palette;