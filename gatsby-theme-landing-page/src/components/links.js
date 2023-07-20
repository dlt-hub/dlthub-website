import * as React from "react";
import * as styles from "./links.module.css";
import Button from "../components/button";

export default function Links({ links }) {
  return (
    <div className={styles.buttonContainer}>
      {links.map((link, i) => (
        <Button key={link.id} {...link} variant="primary" />
      ))}
    </div>
  );
}
