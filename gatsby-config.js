module.exports = {
  siteMetadata: {
    title: `Palette Picker`,
    description: `Generate a color palette from your favorite images! Just upload a file to have a color palette automatically generated from the most prominant colors. Hex values included so you can easily use your new palette in other applications!`,
    author: `Dylan Perkins`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `palette-picker-client-redux`,
        short_name: `palette-picker`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
