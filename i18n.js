module.exports = {
    locales: ['en', 'ru', 'uz'],
    defaultLocale: 'uz',
    pages: {
      '*': ['common'], 
      '/': ['common']  
    },
    loadLocaleFrom: (locale, namespace) =>
      import(`./src/locales/${locale}/${namespace}.json`).then((m) => m.default),
  }
  