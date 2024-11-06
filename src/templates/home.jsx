import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const IndexPageTemplate = ({ ...props }) => {
  // const [section, setSection] = useState(1);
  // const buttonRef = useRef(null);
  // const imageSection1 = getImage(props.imageSection1) || props.imageSection1;
  // const imageSection2 = getImage(props.imageSection2);
  // const imageSection3 = getImage(props.imageSection3) || props.imageSection3;

  return (
    <main className="main main-index">
      {/* <div
        className={
          section === 2
            ? "main-sectionContainer main-sectionContainer-2"
            : "main-sectionContainer"
        }
      >
        <div className="main-section1">
          <div className="content">
            <h1 className="content-title">{props.title}</h1>
            <h2 className="content-subtitle">{props.subtitle}</h2>
            <p className="content-description">{props.description}</p>
            <button
              ref={buttonRef}
              onClick={() => setSection(2)}
              type="button"
              className="content-button"
            >
              {props.buttonValue}
            </button>
          </div>

          <GatsbyImage
            image={imageSection1}
            alt="surfeur"
            className="main-section1-image"
          />
        </div>
        <div className="main-section2">
          <div className="main-descriptionContainer">
            <div className="main-description main-description-web">
              <h3>{props?.marketingContent?.title}</h3>
              <p>{props?.marketingContent?.description}</p>
              <Link className="main-description-link" to="/web-marketing">
                En savoir +
              </Link>
            </div>
            <div className="main-description main-descrption-marketing">
              <h3>{props?.webCreationContent?.title}</h3>
              <p>{props?.webCreationContent?.description}</p>
              <Link className="main-description-link" to="/creation-site-web">
                En savoir +
              </Link>
            </div>
          </div>
          <GatsbyImage
            image={imageSection2}
            alt="surfeur"
            className="main-section2-image1"
          />
          <GatsbyImage
            image={imageSection3}
            alt="soleil"
            className="main-section2-image2"
          />
          <button
            onClick={() => {
              setSection(1);
            }}
            className="main-scrollIcon"
            aria-label="navigation entre la séction 1 et 2"
          >
            <AiOutlineCaretUp />
          </button>
        </div>
      </div>

      <span
        className={section === 2 ? "main-span1 main-span1-2" : "main-span1"}
      />
      <span
        className={section === 2 ? "main-span2 main-span2-2" : "main-span2"}
      />
      <span
        className={section === 2 ? "main-span3 main-span3-2" : "main-span3"}
      />
      <span
        className={section === 2 ? "main-span4 main-span4-2" : "main-span4"}
      /> */}
    </main>
  );
};

const IndexPage = ({ location, data }) => {
  // const { frontmatter, fields } = data.markdownRemark;
  return (
    <Layout location={location}>
      {/* <Helmet>
        <title>{`${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet> */}
      <IndexPageTemplate
      // title={frontmatter.title}
      // description={frontmatter.description}
      // subtitle={frontmatter.subtitle}
      // buttonValue={frontmatter.bouttonValue}
      // imageSection1={frontmatter.imageSection1}
      // imageSection2={frontmatter.imageSection2}
      // imageSection3={frontmatter.imageSection3}
      // webCreationContent={frontmatter.sitewebCreation}
      // marketingContent={frontmatter.webMarketing}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         seo {
//           title
//           description
//         }
//         webMarketing {
//           title
//           description
//         }
//         sitewebCreation {
//           title
//           description
//         }
//         description
//         imageSection1 {
//           childImageSharp {
//             gatsbyImageData(formats: WEBP)
//           }
//         }
//         imageSection2 {
//           childImageSharp {
//             gatsbyImageData(formats: WEBP)
//           }
//         }
//         imageSection3 {
//           childImageSharp {
//             gatsbyImageData(formats: WEBP)
//           }
//         }
//         title
//         subtitle
//         bouttonValue
//       }
//     }
//   }
// `;

export default IndexPage;
