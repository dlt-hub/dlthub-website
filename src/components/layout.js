import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.header}>
        <headeri className={styles.headeri}>
          <img
            src={"../../dlthub-logo.png"}
            alt="dltHub logo"
            width="103"
            height="30"
          ></img>
          <div className={styles.headerlinks}>
            <a href="/">home</a>
            <a href="/product">product, principles and vision</a>
            <a href="/why">why dlt?</a>
            <a href="/about">about us</a>
          </div>
          <images className={styles.images}>
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
          </images>
        </headeri>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <footeri className={styles.footeri}>
          <span>2023 dlthub</span>
          <div className={styles.linkwrapper}>
            <a href="https://github.com/dlt-hub/dlt">GitHub</a>
            <a href="https://apply.workable.com/dlthub/">Careers</a>
          </div>
        </footeri>
      </footer>
    </div>
  );
}
