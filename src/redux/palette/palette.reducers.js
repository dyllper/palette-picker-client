import PaletteActionTypes from "./palette.types"

const INITIAL_STATE = {
  showPalette: false,
  hexArray: [],
}

const paletteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaletteActionTypes.SET_PALETTE:
      return {
        ...state,
        hexArray: action.payload,
        showPalette: true,
      }
    case PaletteActionTypes.CLEAR_PALETTE:
      return {
        ...state,
        hexArray: [],
        showPalette: false,
      }
    default:
      return state
  }
}

export default paletteReducer
