import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const BlogCountryTemplate = ({ data, list }) => {
  console.log(list);
  return (
    <main className="main main-alldestinations">
      <nav className="main-blogPost-link">
        <a href="/blog/">Blog</a> &rsaquo;{" "}
        <a
          href={`/blog/continent/${data.continent
            .toLowerCase()
            .replaceAll(" ", "-")}/`}
        >
          {data.continent}
        </a>
      </nav>
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
      <section className="main-alldestinations-countryListPays">
        <h2 className="main-alldestinations-countryListPays-title">
          <span></span>
          Les articles
          <span></span>
        </h2>
        <div className="main-alldestinations-countryListPays-list">
          {list
            ?.filter((item) => item.node.frontmatter.pays === data.title)
            .map((item, key) => {
              return (
                <Link
                  className="main-alldestinations-countryListPays-list-item"
                  to={`/blog/articles/${item.node.frontmatter.slugPerso
                    ?.toLowerCase()
                    .replaceAll(" ", "-")}/`}
                  key={key}
                >
                  <GatsbyImage
                    image={getImage(
                      item.node.frontmatter.featuredImage.picture
                    )}
                    alt={item.node.frontmatter.featuredImage.altPicutre}
                    className="main-alldestinations-countryListPays-list-item-img"
                  />
                  <h4 className="main-alldestinations-countryListPays-list-item-title">
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

const BlogCountry = ({ data }) => {
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
      <BlogCountryTemplate data={{ ...frontmatter, html: html }} list={list} />
    </Layout>
  );
};

export default BlogCountry;

export const pageQuery = graphql`
  query BlogContry($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle

        continent
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
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slugPerso
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
            pays
          }
        }
      }
    }
  }
`;
