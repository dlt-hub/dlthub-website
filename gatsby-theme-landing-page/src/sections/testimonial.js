import React from "react";
import * as styles from "./testimonial.module.css";
import Section from "../components/section";
import MarkdownText, { getText } from "../components/markdown-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Links from "../components/links";

export default function Testimonial({ content, links }) {
  return (
    <Section>
      <div className={styles.content}>
        {content.map((item) => (
          <TestimonialContent {...item} />
        ))}
      </div>
      {links && <Links links={links} />}
    </Section>
  );
}

function TestimonialContent({
  primaryText,
  secondaryText,
  avatar,
  tertiaryText,
}) {
  if (!primaryText) return;

  return (
    <div className={styles.testimonial}>
      <MarkdownText as="blockquote" className={styles.quote} {...primaryText} />
      <div className={styles.author}>
        {avatar && (
          <div className={styles.avatar}>
            <GatsbyImage
              image={getImage(avatar)}
              alt={avatar.title || getText(primaryText)}
            />
          </div>
        )}
        <MarkdownText
          as="cite"
          className={styles.authorName}
          {...secondaryText}
        />
        <MarkdownText
          as="cite"
          className={styles.authorCompany}
          {...tertiaryText}
        />
      </div>
    </div>
  );
}
