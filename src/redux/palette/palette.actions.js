import PaletteActionTypes from "./palette.types"

export const setPalette = colors => ({
  type: PaletteActionTypes.SET_PALETTE,
  payload: colors,
})

export const clearPalette = () => ({
  type: PaletteActionTypes.CLEAR_PALETTE,
})
