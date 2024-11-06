import React from "react";
import { graphql } from "gatsby";
import { HTMLContent } from "../components/Content";
import "/src/style/mentions.scss";

// eslint-disable-next-line
export const MentionPageTemplate = ({ data }) => {
  return (
    <main className="main main-mention">
      <HTMLContent className="main-mention-content" content={data} />
    </main>
  );
};

const MentionPage = ({ data }) => {
  const { html } = data.markdownRemark;
  return <MentionPageTemplate data={html} />;
};

export default MentionPage;

export const pageQuery = graphql`
  query MentionsLegale {
    markdownRemark(frontmatter: { templateKey: { eq: "mentions-legales" } }) {
      id
      html
      fields {
        slug
      }
    }
  }
`;
