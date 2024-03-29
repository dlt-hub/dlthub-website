import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./team.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import Section from "../components/section";

export default function Team({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <div className={styles.content}>
        {content.map((item) => (
          <TeamContent key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.clearall} />
    </Section>
  );
}

function TeamContent({ primaryText, secondaryText, image, links }) {
  const link = links && links[0];

  let className = styles.contentCard;
  if (link) {
    className += " " + styles.contentCardWithLink;
  }
  return (
    <div
      className={className}
      onClick={() => {
        if (link) window.open(link.href);
      }}
    >
      <div className={styles.textContainer}>
        <MarkdownText
          as="h3"
          className={styles.contentHeading}
          {...primaryText}
        />
        <MarkdownText {...secondaryText} />
      </div>
      {image && (
        <GatsbyImage
          image={getImage(image)}
          alt={image.title || getText(primaryText)}
          className={styles.contentImage}
        />
      )}
    </div>
  );
}
