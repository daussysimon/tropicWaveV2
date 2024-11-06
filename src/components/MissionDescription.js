import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HTMLContent } from "../components/Content";
import "../style/webDescription.scss";

const MissionDescription = ({ ...props }) => {
  return (
    <main className="main main-missionDescription">
      <div className="missionDescription-title">
        <h1>{props.siteData.title}</h1>
      </div>
      <div className="missionDescription-body">
        <HTMLContent
          className="missionDescription-body-content"
          content={props.body}
        />
        <div className="missionDescription-exemple">
          {props?.siteData?.sitesExemple?.map((item, key) => (
            <div
              key={key}
              className={
                props.type !== "web"
                  ? "missionDescription-exemple-item"
                  : "missionDescription-exemple-item missionDescription-exemple-item-web"
              }
            >
              <h4>{item.name}</h4>
              <GatsbyImage
                image={item.picture?.childImageSharp.gatsbyImageData}
                alt={item.alt || ""}
              />
              {item.link && (
                <div className="missionDescription-exemple-item--link">
                  <Link to={item.link}>Consulter</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MissionDescription;
