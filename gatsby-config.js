module.exports = {
  siteMetadata: {
    title: `Muhammad Muhsin`,
    description: `Muhammad Muhsin | Full Stack Engineer, Writer, Speaker and Open Source Contributor.`,
    author: `@muhsinlk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammd Muhsin`,
        short_name: `muhammad.dev`,
        start_url: `/`,
        background_color: `#139fc9`,
        theme_color: `#139fc9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
