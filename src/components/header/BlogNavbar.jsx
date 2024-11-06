import React, { useState } from "react";
import { Link, graphql, StaticQuery, withPrefix } from "gatsby";
import "./style.scss";

/* eslint-disable */

const BlogNavBar = ({ data, type }) => {
  const { phone, email, instagram, pinterest } =
    data?.markdownRemark?.frontmatter;
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState({ email: false, phone: false });

  return (
    <div className={type === "article" ? "navbar navbar-article" : "navbar"}>
      <p className="navbar-title">
        TROPICWAVE | <Link to="/blog/">BLOG</Link>
      </p>
      <div className={isOpen ? "navbar-menu-open navbar-menu" : "navbar-menu"}>
        <img
          className="navbar-menu-logo"
          src={`${withPrefix("/")}img/favico.png`}
          width="100"
          height="40"
          alt="le nom de notre entreprise avec un palmier"
        />
        <div className="navbar-menu-content">
          <nav>
            <Link className="navbar-menu-item" to="/">
              Agence
            </Link>
            <hr />
            <Link className="navbar-menu-item" to="/blog/">
              Blog
            </Link>
            <hr />
            <Link className="navbar-menu-item" to="/blog/alldestinations/">
              Nos destinations
            </Link>
            <hr />
          </nav>
          <div className="navbar-menu-contact">
            <h6>Nous contacter</h6>
            <div className="navbar-menu-contact-container">
              <button
                onClick={() => {
                  setContact({
                    phone: false,
                    email: contact?.email.length > 0 ? false : email,
                  });
                }}
                type="button"
              >
                Email
              </button>
              <div
                className="navbar-menu-contact-item"
                style={
                  contact.email === false ? { opacity: 0 } : { opacicty: 1 }
                }
              >
                {
                  <a
                    href={`mailto::${contact.email}`}
                    aria-label={contact.email}
                  >
                    {contact.email}
                  </a>
                }
              </div>
            </div>

            <div className="navbar-menu-contact-container">
              <button
                onClick={() => {
                  setContact({
                    email: false,
                    phone: contact?.phone.length > 0 ? false : phone,
                  });
                }}
                type="button"
              >
                Téléphone
              </button>
              <div
                className="navbar-menu-contact-item"
                style={
                  contact.phone === false ? { opacity: 0 } : { opacicty: 1 }
                }
              >
                <a href={`tel:${contact.phone}`} aria-label={contact.phone}>
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="navbar-menu-contact-socialMedia">
              <a href={instagram} target="_blank"></a>
              <a href={pinterest} target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isOpen ? "navbar-burger-open navbar-burger" : "navbar-burger"
        }
        role="button"
        aria-label="menu-burger"
        tabIndex={0}
        onClick={() => {
          setIsOpen(!isOpen);
          setContact({ email: false, phone: false });
        }}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default function MyNavBar({ type }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
            frontmatter {
              phone
              email
              pinterest
              instagram
            }
          }
        }
      `}
      render={(data) => <BlogNavBar data={data} type={type} />}
    />
  );
}
