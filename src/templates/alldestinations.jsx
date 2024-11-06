import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { HTMLContent } from "../components/Content";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const BlogPageTemplate = ({ data, list }) => {
  const continent = list.filter(
    (item) => item.node.frontmatter.templateKey === "blog-continent"
  );
  const country = list.filter(
    (item) => item.node.frontmatter.templateKey === "blog-country"
  );

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
      <section className="main-alldestinations-continent">
        {continent
          .sort((a, b) =>
            a.node.frontmatter.title < b.node.frontmatter.title ? -1 : 1
          )
          .map((item, key) => {
            const data = item.node.frontmatter;
            return (
              <div
                className={
                  key % 2 === 1
                    ? "main-alldestinations-continent-item main-alldestinations-continent-item-pair"
                    : "main-alldestinations-continent-item"
                }
                key={key}
              >
                <div className="main-alldestinations-continent-item-content">
                  <div className="main-alldestinations-continent-item-content-text">
                    <h2>{data.title}</h2>
                    <p>{data.seo.description}</p>
                    <Link
                      className="main-alldestinations-continent-item-content-text-link"
                      to={`/blog/continent/${data.title
                        .replace(" ", "-")
                        .toLowerCase()}/`}
                    >
                      Travel
                    </Link>
                  </div>
                  <GatsbyImage
                    className="main-alldestinations-continent-item-content-img"
                    image={getImage(data.featuredImage.picture)}
                    alt={data.featuredImage.altPicutre}
                  />
                </div>

                <div className="main-alldestinations-continent-item-countryList">
                  {country
                    .filter(
                      (item) => item.node.frontmatter.continent === data.title
                    )
                    .map((item, key) => (
                      <Link
                        key={key}
                        className="main-alldestinations-continent-item-countryList-link"
                        to={`/blog/pays/${item.node.frontmatter.title
                          .toLowerCase()
                          .replace(" ", "-")}/`}
                      >
                        {item.node.frontmatter.title}
                      </Link>
                    ))}
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
};

const BlogPage = ({ location, data }) => {
  const { frontmatter, fields, html } = data.markdownRemark;
  const list = data.allMarkdownRemark.edges;
  return (
    <Layout
      location={location}
      type="blog"
      backgroundImg={frontmatter.alldestinationImg}
    >
      <Helmet>
        <title>{`${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet>
      <BlogPageTemplate data={{ ...frontmatter, html: html }} list={list} />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { in: ["blog-country", "blog-continent"] } }
      }
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
    markdownRemark(frontmatter: { templateKey: { eq: "alldestinations" } }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle
        alldestinationImg {
          altPicutre
          picture {
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
  }
`;
