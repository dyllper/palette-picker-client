import React from 'react';

const FileForm = ({ onChange }) => (
  <form>
    <div className="input-container">
      <input type="file" id="fileupload" className="file-upload-input" onChange={onChange}/>
      <label htmlFor="fileupload" className="file-input-label">Upload an image</label>
      <style jsx>{`
          .input-container {
            position: relative;
            text-align: center;
          }
          .file-upload-input {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
          }
          .file-input-label {
            vertical-align: middle;
            font-size: 1.25em;
            font-weight: 700;
            padding: 14px 45px;
            margin: 0 auto;
            color: #fff;
            background-color: #39d2b4;
            display: inline-block;
            transition: all 0.4s;
            cursor: pointer;
          }
          .file-upload-input:hover + .file-input-label,
          .file-upload-input:focus + .file-input-label,
          .file-input-label:hover,
          .file-input-label:focus {
            background-color: #34495e;
            color: #39d2b4;
          }
        `}</style>
    </div>
  </form>
)

export default FileForm;