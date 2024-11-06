import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const BlogPageTemplate = ({ ...props }) => {
  const { aboutUs, allDestination, agency } = props.data;

  return (
    <main className="main main-blog">
      <section className="main-blog-aboutUs">
        <div className="main-blog-aboutUs-container">
          <div className="main-blog-aboutUs-container-imgContainer">
            <span className="main-blog-aboutUs-container-imgContainer-imgDeco"></span>
            <GatsbyImage
              image={getImage(aboutUs.aboutImage.picture)}
              alt={aboutUs.aboutImage.altPicutre}
              className="main-blog-aboutUs-container-imgContainer-img"
            />
          </div>

          <div className="main-blog-aboutUs-container-content">
            <h2>{aboutUs.title}</h2>
            <p>{aboutUs.description}</p>
          </div>
        </div>
      </section>
      <section className="main-blog-allDestinations">
        <div className="main-blog-allDestinations-container">
          <div className="main-blog-allDestinations-container-imgContainer">
            <GatsbyImage
              image={getImage(allDestination.destinationsImg.picture)}
              alt={allDestination.destinationsImg.altPicutre}
              className="main-blog-allDestinations-container-imgContainer-img"
            />
          </div>
          <div className="main-blog-allDestinations-container-content">
            <h2>{allDestination.title}</h2>
            <p>{allDestination.description}</p>
            <Link
              className="main-blog-allDestinations-container-content-link"
              to="/blog/alldestinations/"
            >
              Are you ready ?
            </Link>
          </div>
        </div>
      </section>
      <section className="main-blog-favoriteDestination">
        <h2 className="main-blog-favoriteDestination-title">
          <span /> Nos destinations favorites
        </h2>
        <div className="main-blog-favoriteDestination-selection">
          {props?.country?.slice(0, 4).map((item, key) => {
            return (
              <Link
                className="main-blog-favoriteDestination-selection-cart"
                to={`./pays/${item.node.frontmatter.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}/`}
                key={key}
              >
                <GatsbyImage
                  image={getImage(item.node.frontmatter.featuredImage.picture)}
                  alt={item.node.frontmatter.featuredImage.altPicutre}
                  className="main-blog-favoriteDestination-selection-cart-img"
                />
                <h4 className="main-blog-favoriteDestination-selection-cart-title">
                  {item.node.frontmatter.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="main-blog-agency">
        <div className="main-blog-agency-container">
          <div className="main-blog-agency-container-imgContainer">
            <GatsbyImage
              image={getImage(agency.agencyImg.picture)}
              alt={agency.agencyImg.altPicutre}
              className="main-blog-agency-container-imgContainer-img"
            />
            <span className="main-blog-agency-container-imgContainer-imgDeco" />
          </div>
          <div className="main-blog-agency-container-content">
            <h2>{agency.title}</h2>
            <p>{agency.description}</p>
            <Link className="main-blog-agency-container-content-link" to="/">
              {" "}
              Travaillons ensemble
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const BlogPage = ({ location, data }) => {
  const { frontmatter, fields } = data.markdownRemark;
  const country = data.allMarkdownRemark.edges;
  return (
    <Layout
      location={location}
      type="blog"
      fullHeight={true}
      backgroundImg={frontmatter.featuredImage}
    >
      <Helmet>
        <title>{`Tropicwave | ${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet>
      <BlogPageTemplate data={frontmatter} country={country} />
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
    markdownRemark(frontmatter: { templateKey: { eq: "blog" } }) {
      frontmatter {
        title
        subtitle
        aboutUs {
          description
          title
          aboutImage {
            picture {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
            altPicutre
          }
        }
        agency {
          description
          title
          agencyImg {
            picture {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
            altPicutre
          }
        }
        allDestination {
          description
          title
          destinationsImg {
            altPicutre
            picture {
              childImageSharp {
                gatsbyImageData(formats: WEBP, sizes: "450px")
              }
            }
          }
        }
        featuredImage {
          altPicutre
          picture {
            childImageSharp {
              gatsbyImageData(formats: WEBP)
            }
          }
        }
        seo {
          title
          description
        }
      }
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
            title
            featuredImage {
              altPicutre
              picture {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;
