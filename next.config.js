const nextConfig = {
  env: {
    // Will be available on both server and client
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN
  }
};