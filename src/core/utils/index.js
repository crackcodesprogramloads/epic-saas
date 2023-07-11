const isProd = process.env.NODE_ENV === "production";

export const SITE_URL = isProd
  ? process.env.NEXT_PUBLIC_PROD_URL
  : "http://localhost:3000";
