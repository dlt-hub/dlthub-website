import React from "react";
import * as styles from "./copy.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/section";
import Heading from "../components/heading";
import Container from "../components/container";

export default function Copy({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <Container className={styles.container}>
        {content.map((item, index) => {
          return <CopyContent key={item.id} index={index} {...item} />;
        })}
      </Container>
    </Section>
  );
}

function CopyContent({ primaryText, secondaryText, image, index }) {
  const classes = [styles.copyContainer];
  if (index % 2 === 0) classes.push(styles.copyContainerOdd);
  if (!image) classes.push(styles.copyContainerNoImage);
  return (
    <Container className={classes.join(" ")}>
      {image && (
        <div className={styles.image}>
          <GatsbyImage
            image={getImage(image)}
            alt={image.title || getText(primaryText)}
          />
        </div>
      )}
      <div className={styles.copyContent}>
        <MarkdownText
          createId={true}
          className={styles.copyHeading}
          {...primaryText}
        />
        <MarkdownText className={styles.copyText} {...secondaryText} />
      </div>
    </Container>
  );
}
