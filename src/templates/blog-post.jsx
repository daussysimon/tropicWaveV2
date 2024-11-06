import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const BlogPostTemplate = ({ data, continent, articles }) => {
  console.log(data.html);
  return (
    <main className="main-blogPost">
      <nav className="main-blogPost-link">
        <a href="/blog/">Blog</a> &rsaquo;{" "}
        <a
          href={`/blog/continent/${continent
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          {continent}
        </a>{" "}
        &rsaquo;{" "}
        <a href={`/blog/pays/${data.pays.toLowerCase().replaceAll(" ", "-")}`}>
          {data.pays}
        </a>
      </nav>
      <article>
        <h1 className="main-blogPost-title">{data.title}</h1>
        <p className="main-blogPost-subtitle">{data.description}</p>
        <div className="main-blogPost-essentials">
          <GatsbyImage
            className="main-blogPost-essentials-img"
            image={getImage(data?.featuredImage.picture)}
            loading="eager"
            alt={data?.featuredImage.altPicutre}
          />
          <div className="main-blogPost-essentials-content">
            <p className="main-blogPost-essentials-content-title">
              L'essentiel
            </p>
            <ul className="main-blogPost-essentials-contner-list">
              {data?.informations?.map((item, key) => (
                <li key={key}>
                  {" "}
                  <strong>{item.title}</strong>{" "}
                  <a href={`${data.slug}${item.lien}`}>{item.valeur}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <HTMLContent className="main-blogPost-html" content={data.html} />
      </article>
      {articles.length > 0 && (
        <section className="main-blogPost-countryListPays">
          <h2 className="main-blogPost-countryListPays-title">
            <span></span>
            {data.pays}
            <span></span>
          </h2>
          <div className="main-blogPost-countryListPays-list">
            {articles?.map((item, key) => {
              return (
                <Link
                  className="main-blogPost-countryListPays-list-item"
                  to={`/blog/articles/${item?.frontmatter.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}/`}
                  key={key}
                >
                  <GatsbyImage
                    image={getImage(item.frontmatter.featuredImage.picture)}
                    alt={item.frontmatter.featuredImage.altPicutre}
                    className="main-blogPost-countryListPays-list-item-img"
                  />
                  <h4 className="main-blogPost-countryListPays-list-item-title">
                    {item.frontmatter.title}
                  </h4>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

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
