import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./features.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import Link from "../components/link";
import LinkContainer from "../components/link-container";
import Section from "../components/section";

export default function Features({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <div className={styles.content}>
        {content &&
          content.map((item, i) => (
            <Feature
              {...item}
              orientation={i % 2 === 0 ? "default" : "reverse"}
            />
          ))}
      </div>
    </Section>
  );
}

function Feature({
  primaryText,
  secondaryText,
  image,
  links,
  secondaryImages,
}) {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.imageColumn}>
        <GatsbyImage
          image={getImage(image)}
          alt={(image && image.title) || getText(primaryText)}
        />
      </div>
      <div className={styles.copyColumn}>
        <div className={styles.copyContainer}>
          <MarkdownText
            as="h4"
            className={styles.primaryText}
            {...primaryText}
          />
          <MarkdownText className={styles.secondaryText} {...secondaryText} />
          <LinkContainer>
            {links && links.map((link) => <Link key={link.id} {...link} />)}
          </LinkContainer>

          {secondaryImages && (
            <div className={styles.secondaryImageContainer}>
              {secondaryImages.map((image) => (
                <GatsbyImage
                  className={styles.secondaryImage}
                  image={getImage(image)}
                  alt={image && image.title}
                />
              ))}
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}
