module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'google',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': ['off'],
    'arrow-body-style': ['off'],
    'max-len': ['off'],
    'no-console': ['off'],
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
