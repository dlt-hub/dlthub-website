import * as React from "react";
import * as sanitize from "sanitize-html";
import * as styles from "./markdown-text.module.css";
import slugify from "slugify";

export const getText = (markdownTextNode) =>
  sanitize(markdownTextNode?.childMarkdownRemark?.html, { allowedTags: [] });

const blockOptions = {
  allowedTags: [
    "p",
    "a",
    "b",
    "strong",
    "em",
    "i",
    "pre",
    "code",
    "ul",
    "ol",
    "li",
    "span",
    "div",
    "iframe",
    "blockquote",
    "br",
  ],
  selfClosing: ["img", "hr", "br"],
};

const inlineOptions = {
  allowedTags: ["strong", "b", "i", "em", "a", "span"],
  selfClosing: [],
};

export default function MarkdownText({
  childMarkdownRemark,
  as,
  className = "",
  createId = false,
  ...rest
}) {
  if (!childMarkdownRemark) return null;

  const shouldUseInline = !!as;
  const sanitizeOptions = shouldUseInline ? inlineOptions : blockOptions;
  const html = childMarkdownRemark.html;
  let sanitized = sanitize(html, sanitizeOptions);
  const Component = as || "div";

  if (createId && childMarkdownRemark) {
    const id = slugify(
      sanitize(html, {
        allowedTags: [],
        allowedAttributes: {},
      })
    ).toLowerCase();
    rest["id"] = id;
    sanitized = sanitized.replace(/<\/p>/g, ` <a href="#${id}">#</a></p>`);
  }

  return (
    <Component
      className={[styles.root, className].join(" ")}
      dangerouslySetInnerHTML={{ __html: sanitized }}
      {...rest}
    ></Component>
  );
}
