import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  position: relative;
  text-align: center;
`

const UploadInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position:absolute;
  z-index: -1;
`

const InputLabel = styled.label`
  vertical-align: middle;
  font-size: 1.25em;
  font-weight: 700;
  padding: 14px 45px;
  margin: 0 auto;
  color: #fff;
  background-color: #32d2b4;
  display: inline-block;
  transition: all 0.4s;
  cursor: pointer;
  margin-top: 20px;

  :hover {
    background-color: #34495e;
    color: #39d2b4;
  }
`



const FileForm = ({ onChange }) => (
  <form>
    <Container>
      <UploadInput type="file" id="fileupload" className="file-upload-input" onChange={onChange}/>
      <InputLabel htmlFor="fileupload" className="file-input-label">Upload an image</InputLabel>
    </Container>
  </form>
)

export default FileForm;