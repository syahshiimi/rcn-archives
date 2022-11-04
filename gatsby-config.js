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
    siteMetadata: {
        title: "RCW Asia",
        description:
            " Reconceptualizing the Cold War: On-the-ground Experiences in Asia, aims to build an online archive of oral history collections concerning the Cold War and decolonization in Asia, with a particular focus on Southeast, East, and South Asia.",
        author: "@masudahajimu",
        url: "https://rcw-asia.com",
        image: "/alt.svg",
    },

    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://www.rcw-asia.com",
                sitemap: "https://www.rcw-asia.com/sitemap.xml",
                env: {
                    development: {
                        policy: [{ userAgent: "*", disallow: ["/"] }],
                    },
                    production: {
                        policy: [{ userAgent: "*", allow: "/" }],
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        {
            resolve: "gatsby-plugin-local-search",
            options: {
                name: "archives",
                engine: "flexsearch",
                engineOptions: { tokenize: "strict" },
                query: `
        query MyQuery {
          allContentfulInterviewTranscripts {
              nodes {
                      interviewer
                      interviewee
                      transcriptTags
                      transcriptTitle
                      englishFullTranscript { raw }
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
                    "englishTranscript",
                ],
                store: [
                    "id",
                    "transcriptTitle",
                    "transcriptTags",
                    "oneLiner",
                    "oneLineTeaser",
                    "interviewer",
                    "interviewee",
                    "englishTranscript",
                ],
                normalizer: ({ data }) =>
                    data.allContentfulInterviewTranscripts.nodes.map((node) => ({
                        id: node.id,
                        transcriptTitle: node.transcriptTitle,
                        transcriptTags: node.transcriptTags,
                        oneLiner: node.oneLineTeaser.oneLineTeaser, // schema for
                        // search card
                        oneLineTeaser: node.oneLineTeaser, // schema for searching only
                        interviewer: node.interviewer,
                        interviewee: node.interviewee,
                        englishTranscript: node.englishFullTranscript.raw,
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
                path: `${__dirname}/src/assets`,
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
        {
            resolve: `gatsby-plugin-gatsby-cloud`,
            options: {
                headers: {}, // option to add more headers. `Link` headers are
                // transformed by the below criteria
                allPageHeaders: [], // option to add headers for all pages. `Link`
                // headers are transformed by the below criteria
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules
                // for client only paths
            },
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/assets/icon.png",
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/about-us/`, `/projects/*`],
            },
        },
    ],
};
