/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ru-RU', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ru-RU',
    localeDetection: false,
  },
};

module.exports = nextConfig;
