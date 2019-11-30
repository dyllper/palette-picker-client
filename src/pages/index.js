import React from "react"
import axios from "axios"
import styled from "styled-components"
import { connect } from "react-redux"

import { clearImageName, setImageName } from "../redux/image/image.actions"
import { clearPalette, setPalette } from "../redux/palette/palette.actions"

import FileForm from "../components/file-form.component"
import Palette from "../components/palette.component"

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
`

const InstructionText = styled.p`
  text-indent: 2em;
  line-height: 1.5em;
  font-size: 18px;
  font-family: skolat-latin;
  font-color: #1f1f1f;
`

const DisplayImage = styled.img`
  height: auto;
  width: 400px;
  margin: 15px auto;
  box-shadow: 5px 5xp 10px #0f0f0f;
  display: block;
`

const IndexPage = ({ setImageName, clearImageName, imageName, setPalette }) => {
  const submitForm = image => {
    const formData = new FormData()
    formData.append("image", image)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }

    axios
      .post(
        "https://dyllper-color-palette-api.herokuapp.com/upload",
        formData,
        config
      )
      .then(response => {
        setPalette(response.data.hexColors)
        setImageName(image.name)
      })
      .catch(error => console.log(error))
  }

  const onChange = event => {
    event.preventDefault()
    const image = event.target.files[0]
    clearImageName()
    clearPalette()
    submitForm(image)
  }
  return (
    <Container>
      <InstructionText>
        Welcome to my Color Palette Generator App! This fun little projects lets
        you upload an image that you enjoy the colors of and generate a color
        palette based on the 6 most prominent colors that exist within the
        image! The palette will be displayed below your image so that you are
        able to take a peak at where all each of the 6 color swatches come from!
      </InstructionText>
      <FileForm onChange={onChange} />
      {imageName !== "" && (
        <DisplayImage
          src={`https://dyllper-color-palette-api.herokuapp.com/images/${imageName}`}
          alt="Your uploaded file"
        />
      )}
      <Palette />
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  setImageName: imageName => dispatch(setImageName(imageName)),
  setPalette: colors => dispatch(setPalette(colors)),
  clearImageName: () => dispatch(clearImageName()),
  clearPalette: () => dispatch(clearPalette()),
})

const mapStateToProps = state => ({
  imageName: state.image.imageName,
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
