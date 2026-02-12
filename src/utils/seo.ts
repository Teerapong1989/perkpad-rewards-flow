// Advanced SEO utilities
export const updateMetaTags = (meta: {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
}) => {
  if (meta.title) {
    document.title = meta.title;
    updateMetaTag("og:title", meta.title);
    updateMetaTag("twitter:title", meta.title);
  }

  if (meta.description) {
    updateMetaTag("description", meta.description);
    updateMetaTag("og:description", meta.description);
    updateMetaTag("twitter:description", meta.description);
  }

  if (meta.keywords) {
    updateMetaTag("keywords", meta.keywords);
  }

  if (meta.ogImage) {
    updateMetaTag("og:image", meta.ogImage);
    updateMetaTag("twitter:image", meta.ogImage);
  }

  if (meta.ogUrl) {
    updateMetaTag("og:url", meta.ogUrl);
    updateMetaTag("twitter:url", meta.ogUrl);
  }

  if (meta.twitterCard) {
    updateMetaTag("twitter:card", meta.twitterCard);
  }

  if (meta.canonical) {
    updateCanonical(meta.canonical);
  }
};

const updateMetaTag = (property: string, content: string) => {
  let element = document.querySelector(`meta[name="${property}"], meta[property="${property}"]`) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    if (property.startsWith("og:")) {
      element.setAttribute("property", property);
    } else {
      element.setAttribute("name", property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const updateCanonical = (url: string) => {
  let element = document.querySelector("link[rel='canonical']") as HTMLLinkElement;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
};

// Schema.org structured data
export const addStructuredData = (data: Record<string, unknown>) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};
