import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `Best pizza in the world `,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        apiVersion: '2021-06-19',
        projectId: 'ccmm1nkx',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
