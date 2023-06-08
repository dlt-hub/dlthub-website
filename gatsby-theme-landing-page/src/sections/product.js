import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./product.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import Section from "../components/section";

export default function Product({ heading, secondaryHeading, content, image }) {
  return (
    <Section>
      <div className={styles.section}>
        <div className={styles.content}>
          {content.map((item) => (
            <ProductContent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProductContent({ primaryText, secondaryText, tertiaryText, image }) {
  return (
    <div className={styles.contentCard}>
      <div className={styles.textContainer}>
        <MarkdownText
          as="h3"
          className={styles.contentHeading}
          {...primaryText}
        />
        <MarkdownText as="h4" {...secondaryText} />
        <MarkdownText {...tertiaryText} />
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
