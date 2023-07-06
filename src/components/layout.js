import React, { useState } from "react";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menustyles = styles.headerlinks + " " + (isMenuOpen ? styles.open : "");
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <div className={styles.header}>
        <div className={styles.headeri} href="#">
          <a
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
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
            <a href="/about">about us</a>
            <a href="/docs/intro">docs</a>
          </div>
          <div className={styles.images}>
            <a href="https://github.com/dlt-hub/dlt">
              <img
                src={"../../github-logo.png"}
                alt="github logo"
                width="32"
                height="32"
              ></img>
            </a>
            <a href="https://join.slack.com/t/dlthub-community/shared_invite/zt-1slox199h-HAE7EQoXmstkP_bTqal65g">
              <img
                src={"../../slack-logo.png"}
                alt="slack logo"
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
          <a href="/imprint">2023 dltHub imprint</a>

          <div className={styles.linkwrapper}>
            <a href="https://dlthub.com/docs/intro">docs</a>
            <a href="https://github.com/dlt-hub/dlt">GitHub</a>
            <a href="https://apply.workable.com/dlthub/">Careers</a>
          </div>
        </div>
      </div>
    </div>
  );
}
