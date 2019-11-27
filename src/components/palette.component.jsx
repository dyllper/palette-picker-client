import React from 'react';
import { connect } from 'react-redux';

const Palette = ({ showPalette, hexArray }) => (
  <div>
    {showPalette && (
      <div className="palette">
        {hexArray.map((hexValue, index) => {
          return (
            <div key={index} className="palette-element" style={{ backgroundColor: hexValue }}>
              <p className="palette-text">{hexValue}</p>
            </div>
          )
        })}
      </div>
    )}
    <style jsx>{`
        .palette {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .palette-element {
          width: 150px;
          height: 100px;
          display: flex;
          align-items: flex-end;
          align-content: flex-end;
          justify-content: flex-start;
        }
        .palette-text {
          padding: 0;
          margin: 0;
          font-size: 25px;
          font-weight: bold;
        }
      `}</style>
  </div>
)

const mapStateToProps = state => ({
  hexArray: state.palette.hexArray,
  showPalette: state.palette.showPalette,
})

export default connect(mapStateToProps)(Palette);
