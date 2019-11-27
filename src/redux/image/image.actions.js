import ImageActionTypes from "./image.types"

export const setImageName = imageName => ({
  type: ImageActionTypes.SET_IMAGE_NAME,
  payload: imageName,
})

export const clearImageName = () => ({
  type: ImageActionTypes.CLEAR_IMAGE_NAME,
})
