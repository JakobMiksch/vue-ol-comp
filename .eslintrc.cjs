/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['sonarjs', "import"],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:sonarjs/recommended',
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
