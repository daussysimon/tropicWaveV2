import React from "react";
import BlogNavBar from "./BlogNavbar";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const BlogHeader = ({ backgroundImg, fullHeight, type }) => {
  const imageHeader = getImage(backgroundImg?.picture);

  return (
    <header className="header-blog">
      {type !== "article" && (
        <GatsbyImage
          image={imageHeader}
          alt={backgroundImg.altPicutre}
          loading="eager"
          className={
            fullHeight
              ? "header-blog-image header-blog-image-full"
              : "header-blog-image"
          }
        />
      )}
      <BlogNavBar type={type} />
    </header>
  );
};

export default BlogHeader;
