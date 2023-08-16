import * as React from "react";
import * as styles from "./hero.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/section";
import MarkdownText from "../components/markdown-text";
import Heading from "../components/heading";
import Links from "../components/links";

export default function Hero({ heading, secondaryHeading, content, image }) {
  const heroContent = content?.[0];
  const loadedTopImage = getImage(image);
  const contentClass = loadedTopImage
    ? styles.contentWithImage
    : styles.content;
  const loadedBannerImage = getImage(content[0].image);

  return (
    <Section>
      <div className={styles.root}>
        <div className={contentClass}>
          <Heading as="h1" className={styles.heading}>
            {heading}
          </Heading>
          <Heading as="h2" className={styles.secondaryHeading}>
            {secondaryHeading}
          </Heading>
          <HeroContent {...heroContent} />
        </div>
        {loadedTopImage && (
          <div className={styles.image}>
            <GatsbyImage
              image={loadedTopImage}
              alt={loadedTopImage.title || `Hero Image`}
            />
          </div>
        )}
      </div>
      {loadedBannerImage && (
        <div className={styles.bannerImage}>
          <GatsbyImage
            image={loadedBannerImage}
            alt={loadedBannerImage.title || `Hero Image`}
          />
        </div>
      )}
    </Section>
  );
}

function HeroContent({ primaryText, secondaryText, links }) {
  return (
    <div>
      <MarkdownText {...primaryText} />
      <MarkdownText {...secondaryText} />
      {links && <Links links={links} />}
    </div>
  );
}
