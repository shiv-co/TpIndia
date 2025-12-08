import { useEffect } from "react";

export function useMeta({ title, description, keywords, image, url }) {
  useEffect(() => {
    // TITLE
    if (title) document.title = title;

    // DESCRIPTION
    updateTag("meta[name='description']", "name", "description", description);

    // KEYWORDS
    if (keywords) {
      updateTag("meta[name='keywords']", "name", "keywords", keywords);
    }

    // OG TITLE
    updateTag("meta[property='og:title']", "property", "og:title", title);

    // OG DESCRIPTION
    updateTag(
      "meta[property='og:description']",
      "property",
      "og:description",
      description
    );

    // OG IMAGE
    if (image) {
      updateTag("meta[property='og:image']", "property", "og:image", image);
      updateTag("meta[name='twitter:image']", "name", "twitter:image", image);
    }

    // OG URL
    if (url) {
      updateTag("meta[property='og:url']", "property", "og:url", url);
    }
  }, [title, description, keywords, image, url]);
}

function updateTag(selector, attrName, attrValue, content) {
  if (!content) return;

  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}
