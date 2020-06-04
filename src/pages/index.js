import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

import Layout from "../components/layout.component"
import FileForm from "../components/file-form.component"
import Palette from "../components/palette.component"

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5vw;
`

const InstructionText = styled.div`
  text-indent: 2rem;
  line-height: 2.2rem;
  font-size: 1.8rem;
  font-family: skolat-latin;
  font-color: #1f1f1f;
`

const DisplayImage = styled.img`
  height: auto;
  max-width: 500px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0.5rem 0.5rem 1rem #0f0f0f;
  display: block;
`

const IndexPage = () => {
  const [imageName, setImageName] = useState("")
  const [palette, setPalette] = useState([])
  const [showPalette, setShowPalette] = useState(false)

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
        setShowPalette(true)
      })
      .catch(error => console.log(error))
  }

  const onChange = event => {
    event.preventDefault()
    const image = event.target.files[0]
    setImageName("")
    setPalette([])
    setShowPalette(false)
    submitForm(image)
  }
  return (
    <Layout>
      <Container>
        <InstructionText>
          Welcome to my Color Palette Generator App! This fun little projects
          lets you upload an image that you enjoy the colors of and generate a
          color palette based on the 6 most prominent colors that exist within
          the image! The palette will be displayed below your image so that you
          are able to take a peak at where all each of the 6 color swatches come
          from!
        </InstructionText>
        <FileForm onChange={onChange} />
        {imageName !== "" && (
          <DisplayImage
            src={`https://dyllper-color-palette-api.herokuapp.com/images/${imageName}`}
            alt="Your uploaded file"
          />
        )}
        <Palette palette={palette} showPalette={showPalette} />
      </Container>
    </Layout>
  )
}

export default IndexPage
