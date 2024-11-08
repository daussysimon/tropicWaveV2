import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BlogPostTemplate } from "../components/pages/home";

// eslint-disable-next-line

const BlogPost = ({ data }) => {
  const { frontmatter, fields, html } = data?.markdownRemark;
  const country = data.allMarkdownRemark.nodes.find(
    (item) => item?.frontmatter.title === frontmatter?.pays
  );

  const articles = data.allMarkdownRemark.nodes
    .filter(
      (item) =>
        item?.frontmatter.pays === frontmatter?.pays &&
        item?.frontmatter.title !== frontmatter.title
    )
    .slice(0, 3);

  return (
    <Layout type="article">
      <Helmet>
        <title>{`Tropicwave | ${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields?.slug}`} />
      </Helmet>
      <BlogPostTemplate
        data={{ ...frontmatter, html, ...fields }}
        continent={country.frontmatter.continent}
        articles={articles}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle
        description
        informations {
          title
          valeur
        }
        templateKey
        date
        featuredImage {
          altPicutre
          picture {
            childMarkdownRemark {
              id
            }
            childImageSharp {
              gatsbyImageData(formats: WEBP)
            }
          }
        }
        pays
      }
      html
      fields {
        slug
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { in: ["blog-post", "blog-country"] } }
      }
    ) {
      nodes {
        frontmatter {
          continent
          title
          pays
          featuredImage {
            altPicutre
            picture {
              childMarkdownRemark {
                id
              }
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
          }
        }
      }
    }
  }
`;
