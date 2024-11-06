import React from "react";
import { graphql, StaticQuery } from "gatsby";

import "./style.scss";

const BlogFooter = ({ data }) => {
  const { instagram, pinterest } = data?.markdownRemark?.frontmatter;
  return (
    <footer className="footer-blog">
      <nav className="footer-blog-menu">
        <a
          href="https://tropicwavestudio.com/mentions-legales/"
          target="_blank"
          rel="noreferrer"
        >
          Mentions Légales
        </a>
      </nav>
      <p>Copyright tropicwavestudio - Tous droits réservés</p>
      <nav className="footer-blog-socialMedia">
        <a href={instagram} target="_blank" rel="noreferrer"></a>
        <a href={pinterest} target="_blank" rel="noreferrer"></a>
      </nav>
    </footer>
  );
};

export default function MyBlogFooter() {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
            frontmatter {
              pinterest
              instagram
            }
          }
        }
      `}
      render={(data) => <BlogFooter data={data} />}
    />
  );
}
