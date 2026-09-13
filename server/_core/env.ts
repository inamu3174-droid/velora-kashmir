export const env = {
  DATABASE_URL: process.env.DATABASE_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "3000",
  AWS_REGION: process.env.AWS_REGION || "us-east-1",
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || "",
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || "",
  S3_BUCKET: process.env.S3_BUCKET || "",
  VITE_APP_ID: process.env.VITE_APP_ID || "",
  VITE_OAUTH_PORTAL_URL: process.env.VITE_OAUTH_PORTAL_URL || "",
};
