/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`
  ],
  siteMetadata: {
    title: "My Store",
    titleTemplate: "template",
    url: "https://mystore.com",
    description: "This is the place in where you can to buy every thing that need",
    twitterUsername: "@mitienditaonline"
  }
}
