module.exports = {
  input: [
    './components/**/**/*.{js,jsx}',
    './pages/**/src/**/*.{js,jsx}',
    '!./pages/**/src/**/*.spec.{js,jsx}',
    '!./pages/**/src/i18n/**',
    '!**/node_modules/**',
    '!./pages/**/**/node_modules/**',
  ],
  output: './',
  options: {
    removeUnusedKeys: true,
    debug: true,
    sort: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey(ns, value) {
        return value;
      },
      acorn: {
        ecmaVersion: 10, // defaults to 10
        sourceType: 'module', // defaults to 'module'
        // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      },
    },
    lngs: ['ru', 'uk'],
    ns: ['locale'],
    defaultLng: 'uk',
    defaultNs: 'locale',
    defaultValue: '',
    resource: {
      loadPath: './locales/resources/{{lng}}/{{ns}}.json',
      savePath: './locales/resources/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: ':::',
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
      escapeValue: false,
    },
  },
};
