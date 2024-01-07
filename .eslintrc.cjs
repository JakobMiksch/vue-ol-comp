/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['vue', '@typescript-eslint', 'sonarjs'],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:sonarjs/recommended',
    '@vue/eslint-config-typescript',
    'plugin:jsdoc/recommended-typescript-error'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  rules: {
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
