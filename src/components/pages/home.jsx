import React from "react";

export const BlogPostTemplate = ({ data, continent, articles }) => {
  return (
    <main className="main-blogPost">
      {/* <nav className="main-blogPost-link">
        <a href="/blog/">Blog</a> &rsaquo;{" "}
        <a
          href={`/blog/continent/${continent
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          {continent}
        </a>{" "}
        &rsaquo;{" "}
        <a href={`/blog/pays/${data.pays.toLowerCase().replaceAll(" ", "-")}`}>
          {data.pays}
        </a>
      </nav>
      <article>
        <h1 className="main-blogPost-title">{data.title}</h1>
        <p className="main-blogPost-subtitle">{data.description}</p>
        <div className="main-blogPost-essentials">
          <GatsbyImage
            className="main-blogPost-essentials-img"
            image={getImage(data?.featuredImage.picture)}
            loading="eager"
            alt={data?.featuredImage.altPicutre}
          />
          <div className="main-blogPost-essentials-content">
            <p className="main-blogPost-essentials-content-title">
              L'essentiel
            </p>
            <ul className="main-blogPost-essentials-contner-list">
              {data?.informations?.map((item, key) => (
                <li key={key}>
                  {" "}
                  <strong>{item.title}</strong>{" "}
                  <a href={`${data.slug}${item.lien}`}>{item.valeur}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <HTMLContent className="main-blogPost-html" content={data.html} />
      </article>
      {articles.length > 0 && (
        <section className="main-blogPost-countryListPays">
          <h2 className="main-blogPost-countryListPays-title">
            <span></span>
            {data.pays}
            <span></span>
          </h2>
          <div className="main-blogPost-countryListPays-list">
            {articles?.map((item, key) => {
              return (
                <Link
                  className="main-blogPost-countryListPays-list-item"
                  to={`/blog/articles/${item?.frontmatter.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}/`}
                  key={key}
                >
                  <GatsbyImage
                    image={getImage(item.frontmatter.featuredImage.picture)}
                    alt={item.frontmatter.featuredImage.altPicutre}
                    className="main-blogPost-countryListPays-list-item-img"
                  />
                  <h4 className="main-blogPost-countryListPays-list-item-title">
                    {item.frontmatter.title}
                  </h4>
                </Link>
              );
            })}
          </div>
        </section>
      )} */}
    </main>
  );
};
