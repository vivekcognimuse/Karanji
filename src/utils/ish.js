// utils-ish (inline is fine)
export const slugify = (s) =>
  (s || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export const toPlainText = (value) => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(toPlainText).join("");
  if (value && typeof value === "object") {
    if (Array.isArray(value.children))
      return value.children.map(toPlainText).join("");
    if (typeof value.text === "string") return value.text;
    return Object.values(value).map(toPlainText).join("");
  }
  return "";
};

// Accepts a Strapi file object OR a string like "blog/Casestudy 2.webp"
export const getMediaUrl = (fileOrPath) => {
  if (typeof fileOrPath === "string") {
    const raw = fileOrPath.trim();
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) return raw;
    const path = raw.startsWith("/") ? raw : `/${raw}`;
    return path
      .split("/")
      .map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
      .join("/");
  }
  const url = fileOrPath?.data?.attributes?.url || fileOrPath?.url;
  if (!url) return "";
  const origin = (
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "http://localhost:1337/api"
  ).replace(/\/api$/, "");
  return url.startsWith("http") ? url : `${origin}${url}`;
};

// Turn whatever Strapi stores into an array of bullet strings
export const arrayifyList = (val) => {
  if (Array.isArray(val)) return val.map(toPlainText).filter(Boolean);
  const text = toPlainText(val);
  if (!text) return [];
  return text
    .split(/\r?\n|•|–|- /g) // common bullet/line separators
    .map((s) => s.replace(/^\s*[•\-–]\s*/, "").trim())
    .filter(Boolean);
};

export const splitCommaString = (val) => {
  if (Array.isArray(val)) return val.map(toPlainText).filter(Boolean);
  if (typeof val === "string") {
    return val
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
};
