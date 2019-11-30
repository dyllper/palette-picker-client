import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PaletteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
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
  font-size: 25px;
  font-weight: bold;
`

const Palette = ({ showPalette, hexArray }) => (
  <div>
    {showPalette && (
      <PaletteContainer>
        {hexArray.map((hexValue, index) => {
          return (
            <PeletteElement key={index} className="palette-element" style={{ backgroundColor: hexValue }}>
              <PaletteText className="palette-text">{hexValue}</PaletteText>
            </PeletteElement>
          )
        })}
      </PaletteContainer>
    )}
  </div>
)

const mapStateToProps = state => ({
  hexArray: state.palette.hexArray,
  showPalette: state.palette.showPalette,
})

export default connect(mapStateToProps)(Palette);
