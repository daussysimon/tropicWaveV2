import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import MissionDescription from "../components/MissionDescription";

// eslint-disable-next-line
export const WebDescriptionTemplate = ({ ...props }) => {
  return (
    <MissionDescription
      body={props?.body}
      siteData={props?.siteData}
      type="web"
    />
  );
};

const WebDescription = ({ data }) => {
  const { markdownRemark: siteData } = data;
  return (
    <Layout>
      <Helmet>
        <title>{`${siteData.frontmatter?.seo?.title}`}</title>
        <meta
          name="description"
          content={`${siteData.frontmatter?.seo?.description}`}
        />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content={`${siteData.frontmatter.seo?.title}`}
        />
        <meta property="og:url" content={`${siteData.fields.slug}`} />
      </Helmet>
      <WebDescriptionTemplate
        body={siteData.html}
        siteData={siteData.frontmatter}
      />
    </Layout>
  );
};
export const webDescription = graphql`
  query WebDescriptionTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "web-description" } }) {
      html
      fields {
        slug
      }
      frontmatter {
        seo {
          title
          description
        }
        title
        subtitle
        sitesExemple {
          picture {
            childImageSharp {
              gatsbyImageData
            }
          }
          name
          link
        }
      }
    }
  }
`;

export default WebDescription;
