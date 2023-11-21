const nextTranslate = require('next-translate-plugin')
const { locales, defaultLocale } = require('./i18n')

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  experimental: {
    appDir: false,
  },
  i18n: {
    defaultLocale,
    locales,
  },
  swcMinify: false,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
})

process.on('unhandledRejection', (error) => {
  //eslint-disable-next-line
  console.log('unhandledRejection', error)
})

module.exports = nextConfig
