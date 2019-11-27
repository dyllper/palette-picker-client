import ImageActionTypes from "./image.types"

const INITIAL_STATE = {
  imageName: "",
}

const ImageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ImageActionTypes.SET_IMAGE_NAME:
      return {
        ...state,
        imageName: action.payload,
      }
    case ImageActionTypes.CLEAR_IMAGE_NAME:
      return {
        ...state,
        imageName: "",
      }
    default:
      return state
  }
}

export default ImageReducer
