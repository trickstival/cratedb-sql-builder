module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  plugins: [
    'jest'
  ],
  extends: [
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'space-before-function-paren': 1
  },
};
