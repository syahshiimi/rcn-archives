/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "archives",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
        query MyQuery {
          allContentfulInterviewTranscripts {
              nodes {
                      interviewer
                      interviewee
                      transcriptTags
                      transcriptTitle
                      id
                      oneLineTeaser {
                                oneLineTeaser
                                childMarkdownRemark {
                                html
                                }
                              }
                    }
              }
        }

        `,
        ref: "id",
        index: [
          "transcriptTitle",
          "transcriptTags",
          "oneLineTeaser",
          "interviewer",
          "interviewee",
        ],
        store: [
          "id",
          "transcriptTitle",
          "transcriptTags",
          "oneLiner",
          "oneLineTeaser",
          "interviewer",
          "interviewee",
        ],
        normalizer: ({ data }) =>
          data.allContentfulInterviewTranscripts.nodes.map((node) => ({
            id: node.id,
            transcriptTitle: node.transcriptTitle,
            transcriptTags: node.transcriptTags,
            oneLiner: node.oneLineTeaser.oneLineTeaser,
            oneLineTeaser: node.oneLineTeaser,
            interviewer: node.interviewer,
            interviewee: node.interviewee,
          })),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    // Footnotes mode (default: true)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};
