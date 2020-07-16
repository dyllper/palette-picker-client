# About this application

This application allows you to upload an image and then generates a color palette from the six most prominent colors within that image. This client code is written using [GatsbyJS](https://www.gatsbyjs.org/) for static site generation. The backend server is written in [NodeJS](https://nodejs.org) and makes use of the [node-vibrant](https://www.npmjs.com/package/node-vibrant) NPM package for analyzing the uploaded image and detecting the most prominent colors. Backend server code can be found at [here](https://github.com/dyllper/palette-picker-api).

If you look through my GitHub you may notice that this is one of two repos I have created for the frontend of this applicaiton the other one utilizes [Redux](https://redux.js.org/) which was COMPLETELY unecessary for such a small application and was done purely as a learning exercise. This version has been converted to make use of React Hooks instead and is much leaner for it.

# TODO

- ~~Convert application to use styled components~~ **DONE**
- Create a nicer style/layout
- Make the layout responsive
- Look into a11y compliance
