import React, { useState } from "react";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";
import { Script } from "gatsby";

export default function Layout(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menustyles = styles.headerlinks + " " + (isMenuOpen ? styles.open : "");
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Script
        src="https://app.termly.io/embed.min.js"
        data-auto-block="on"
        data-website-uuid="10f5aae5-fbc3-4171-b464-ef6c9ea111be"
      />
      <Head {...props} />
      <div className={styles.header}>
        <div className={styles.headeri} href="#">
          <a
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            href="#menu"
          >
            <img
              src={"../../hamburger.png"}
              alt="github logo"
              width="24"
              height="24"
              className={styles.hamburger}
            ></img>
          </a>
          <a href="/">
            <img
              src={"../../dlthub-logo.png"}
              alt="dltHub logo"
              width="103"
              height="30"
            ></img>
          </a>
          <div className={menustyles}>
            <a href="/product">product principles</a>
            <a href="/why">why dlt?</a>
            <a href="/success-stories">success stories</a>
            <a href="/about">about</a>
            <a href="/docs/intro">docs</a>
          </div>
          <div className={styles.images}>
            <a
              className={styles.buttonText}
              href="https://dlthub.com/community"
            >
              join community
            </a>
            <a href="https://dlthub.com/community">
              <img
                className={styles.slack}
                src={"../../slack-logo.png"}
                alt="slack logo"
                width="32"
                height="32"
              ></img>
            </a>

            <a
              className={styles.buttonText}
              href="https://github.com/dlt-hub/dlt"
            >
              star us
            </a>
            <a href="https://github.com/dlt-hub/dlt">
              <img
                src={"../../github-logo.png"}
                alt="github logo"
                width="32"
                height="32"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <main className={styles.main}>{props.children}</main>
      <div className={styles.footer}>
        <div className={styles.footeri}>
          <a href="/imprint">2024 dltHub imprint</a>
          <a href="https://app.termly.io/document/privacy-policy/e4a72d93-ef95-4e7c-a859-ad32131080b9">
            privacy policy
          </a>
          <a href="https://app.termly.io/document/cookie-policy/c040d44c-b8f1-441e-ab41-bd6da5a56783">
            cookie policy
          </a>
          <div className={styles.linkwrapper}>
            <a href="https://dlthub.com/docs/intro">docs</a>
            <a href="https://github.com/dlt-hub/dlt">github</a>
            <a href="https://apply.workable.com/dlthub/">careers</a>
          </div>
        </div>
      </div>
    </div>
  );
}
