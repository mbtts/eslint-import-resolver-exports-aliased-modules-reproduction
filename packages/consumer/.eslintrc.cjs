module.exports = {
  extends: ['plugin:import/errors'],
  env: {
    es2022: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      exports: {}
    }
  },
}
