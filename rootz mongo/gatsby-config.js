require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `rootz491 mongo`,
    description: `rootz491 mongo`,
    author: `@rootz491`,
    siteUrl: 'https://rootzmongo.gatsbyjs.io',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        dbName: `rootzhowcase`,
        collection: [`projects`],
        connectionString: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3usnk.mongodb.net`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
