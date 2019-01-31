import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import MainLayout from '../layouts/MainLayout';
import Footer from '../components/Footer';

const Home = ({ 
  data: { 
    site: { 
      siteMetadata: {
        title,
        description,
      },
    },
  }
}) => (
  <MainLayout>
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="pl" />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <h1>Lebrande website</h1>
    <Footer />
  </MainLayout>
);

export default Home;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title,
        description,
      } 
    }
  }
`;
