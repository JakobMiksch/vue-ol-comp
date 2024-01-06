/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: [
    'sonarjs',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-tsdoc'
  ],
  extends: [
    '@vue/eslint-config-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:sonarjs/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  rules: {
    'tsdoc/syntax': 'warn',
    'vue/html-self-closing': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }
    ]
  }
}
