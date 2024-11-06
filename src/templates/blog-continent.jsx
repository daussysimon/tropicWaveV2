import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const BlogContinentTemplate = ({ data, list }) => {
  return (
    <main className="main main-alldestinations">
      <section className="main-alldestinations-description">
        <h1 className="main-alldestinations-description-title">{data.title}</h1>
        <p className="main-alldestinations-description-subtitle">
          {data.subtitle}
        </p>
        <HTMLContent
          className="main-alldestinations-description-content"
          content={data.html}
        />
      </section>
      <section className="main-alldestinations-countryListContinent">
        <h2 className="main-alldestinations-countryListContinent-title">
          <span></span>
          Nos destinations
          <span></span>
        </h2>
        <div className="main-alldestinations-countryListContinent-list">
          {list
            ?.filter((item) => item.node.frontmatter.continent === data.title)
            .map((item, key) => {
              return (
                <Link
                  className="main-alldestinations-countryListContinent-list-item"
                  to={`/blog/pays/${item.node.frontmatter.title
                    .replace(" ", "-")
                    .toLowerCase()}/`}
                  key={key}
                >
                  <GatsbyImage
                    image={getImage(
                      item.node.frontmatter.featuredImage.picture
                    )}
                    alt={item.node.frontmatter.featuredImage.altPicutre}
                    className="main-alldestinations-countryListContinent-list-item-img"
                  />
                  <h4 className="main-alldestinations-countryListContinent-list-item-title">
                    {item.node.frontmatter.title}
                  </h4>
                </Link>
              );
            })}
        </div>
        <div className="main-blog-favoriteDestination-selection"></div>
      </section>
    </main>
  );
};

const BlogContinent = ({ data }) => {
  const { frontmatter, fields, html } = data.markdownRemark;
  const list = data.allMarkdownRemark.edges;
  return (
    <Layout type="blog" backgroundImg={frontmatter.featuredImage}>
      <Helmet>
        <title>{`Tropicwave | ${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet>
      <BlogContinentTemplate
        data={{ ...frontmatter, html: html }}
        list={list}
      />
    </Layout>
  );
};

export default BlogContinent;

export const pageQuery = graphql`
  query BlogContinentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle
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
      html
      fields {
        slug
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-country" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            featuredImage {
              altPicutre
              picture {
                childImageSharp {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            seo {
              description
              title
            }
            title
            templateKey
            subtitle
            continent
          }
        }
      }
    }
  }
`;
