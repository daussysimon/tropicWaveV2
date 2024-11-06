import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "../style/page404.scss";

export default function Page404({ data }) {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <main className="main main-404">
        <div className="main-404-content">
          <h1 className="main-404-content-title">{frontmatter.title}</h1>
          <GatsbyImage
            image={getImage(frontmatter.image)}
            alt="surfeur"
            className="main-404-content-image"
            objectFit="contain"
          />
        </div>
      </main>
    </Layout>
  );
}
export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "noFound" } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData
          }
          absolutePath
        }
        title
        paragraphe
      }
    }
  }
`;
