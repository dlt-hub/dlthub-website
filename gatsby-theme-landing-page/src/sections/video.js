import React from "react";
import * as styles from "./video.module.css";
import Section from "../components/section";
import Links from "../components/links";

export default function Video({ heading, secondaryHeading, content }) {
  // Video link is in first link in first section, can be extended for more videos later if we need it
  const video = content[0].links[0];
  const buttonLinks = content[0].links.slice(1);
  return (
    <Section>
      <div className={styles.loomContainer}>
        <iframe
          src={video.href}
          title={video.title}
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen={true}
          className={styles.loomFrame}
        ></iframe>
      </div>
      {buttonLinks && <Links links={buttonLinks} />}
    </Section>
  );
}
