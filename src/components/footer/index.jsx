import React from "react";
import { graphql, StaticQuery } from "gatsby";

import "./style.scss";

const MyFooter = ({ visible, location, data }) => {
  const { instagram } = data?.markdownRemark?.frontmatter;
  return (
    <footer
      className={
        location
          ? !visible
            ? "footer"
            : "footer footer-visible"
          : "footer footer-visible"
      }
    >
      <a
        href="https://tropicwavestudio.com/mentions-legales/"
        target="_blank"
        rel="noreferrer"
        className="footer-mentions"
      >
        Mentions Légales
      </a>
      <nav className="footer-socialMedia">
        <a
          href={instagram}
          className="socialMedia-icons"
          target="_blanck"
          aria-label="lien vers notre page Instagram"
        ></a>
      </nav>
      <p>Copyright tropicwavestudio - Tous droits réservés</p>
    </footer>
  );
};

export default function Footer(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
            frontmatter {
              instagram
            }
          }
        }
      `}
      render={(data) => <MyFooter data={data} />}
    />
  );
}
