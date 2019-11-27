import { combineReducers } from "redux"

import imageReducer from "./image/image.reducers"
import paletteReducer from "./palette/palette.reducers"

const rootReducer = combineReducers({
  palette: paletteReducer,
  image: imageReducer,
})

export default rootReducer
