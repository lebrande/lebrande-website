const siteUrl = 'https://lebrande.pl';

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Lebrande - Jakub Pusiak',
    description: 'Front-end developer, React enthusiast, JavaScript programmer',
  },
  plugins: [  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, disallow: `` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lebrande - Jakub Pusiak`,
        short_name: `Lebrande`,
        start_url: `/`,
        background_color: `#242943`,
        theme_color: `#242943`,
        display: `standalone`,
        icon: `src/assets/images/lebrande-logo.png`,
        orientation: `portrait`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
