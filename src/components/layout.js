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
        <img
          src={"../../dlthub-logo.png"}
          alt="dltHub logo"
          width="103"
          height="30"
        ></img>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <a href="https://github.com/dlt-hub/dlt">GitHub</a>
        <a href="https://apply.workable.com/dlthub/">Careers</a>
      </footer>
    </div>
  );
}
