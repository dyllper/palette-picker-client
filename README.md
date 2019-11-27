# About this application

This application allows you to upload an image and then generates a color palette from the six most prominent colors within that image. This client code is written using GatsbyJS for static site generation. The backend server is written in NodeJS and makes use of the Vibrant NPM package for analyzing the uploaded image and detecting the most prominent colors (backend server code can be found at https://github.com/dyllper/palette-picker-api)

In this version of the client code, I have leveraged Redux for state management. This is COMPLETELY unecessary for an application this small and was done purely for the sake of learning more about Redux and getting more practice with handling all of the pieces that make it up.

# Future Plans

- Convert application to use styled components
- Update styling to make things look nicer
