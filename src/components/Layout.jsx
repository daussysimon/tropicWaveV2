import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";

import { withPrefix } from "gatsby";
import Header from "./header/Header";
import BlogHeader from "./header/BlogHeader";
import BlogFooter from "./footer/BlogFooter";

/* eslint-disable */

const TemplateWrapper = (
  { backgroundImg, type, children, fullHeight },
  ...props
) => {
  const [visible, setVisible] = useState(undefined);

  useEffect(() => {
    let scrollValue = 0;
    document.addEventListener("scroll", (e) => {
      clearTimeout(scroll);
      const scroll = setTimeout(() => {
        if (window.scrollY > scrollValue) {
          setVisible(true);
          scrollValue = window.scrollY;
        } else if (window.scrollY < scrollValue) {
          setVisible(false);
          scrollValue = window.scrollY;
        }
      }, 50);
    });
    return () => document.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div
      className={
        type === "blog" || type === "article" ? "layout-blog" : "layout"
      }
    >
      <Helmet>
        <html lang="fr" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="android-chrome"
          sizes="180x180"
          href={`${withPrefix("/")}img/android-chrome-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-grand.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-petit.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />
        <meta property="og:image" content={`${withPrefix("/")}img/og.png`} />
        {props?.helmet}
      </Helmet>

      <div className="layout-content">
        {type === "blog" || type === "article" ? (
          <BlogHeader
            backgroundImg={backgroundImg}
            fullHeight={fullHeight}
            type={type}
          />
        ) : (
          <Header />
        )}
        {children}
        {type === "blog" || type === "article" ? (
          <BlogFooter />
        ) : (
          <Footer visible={visible} />
        )}
      </div>
    </div>
  );
};

export default TemplateWrapper;
