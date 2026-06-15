import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
}

const DEFAULT_TITLE = "Archers Technologies";
const DEFAULT_DESCRIPTION =
  "Archers Technologies delivers innovative digital solutions, custom software, and enterprise products to transform your business.";

function setMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.querySelector(
    `meta[${attribute}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaTag("name", "description", DEFAULT_DESCRIPTION);
      setMetaTag("property", "og:title", DEFAULT_TITLE);
      setMetaTag("property", "og:description", DEFAULT_DESCRIPTION);
      setMetaTag("name", "twitter:title", DEFAULT_TITLE);
      setMetaTag("name", "twitter:description", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
