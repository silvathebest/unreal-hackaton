module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:boundaries/recommended'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {typescript: {}},
    'boundaries/elements': [
      {type: 'app', pattern: 'app/*'},
      {type: 'processes', pattern: 'processes/*'},
      {type: 'pages', pattern: 'pages/*'},
      {type: 'widgets', pattern: 'widgets/*'},
      {type: 'features', pattern: 'features/*'},
      {type: 'entities', pattern: 'entities/*'},
      {type: 'shared', pattern: 'shared/*'}
    ],
    'boundaries/ignore': ['**/*.test.*'],
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {order: 'asc', caseInsensitive: true},
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2],
    'no-var': 'error',
    'no-shadow': 0,
    'prefer-const': 'error',
    'no-alert': 'error',
    'no-extra-semi': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'consistent-return': 0,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'object-curly-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-unresolved': 0,
    'import/namespace': 0,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-tag-spacing': 2,
    'react/jsx-no-leaked-render': 2
  },
  overrides: [{files: ['**/*.test.*'], rules: {'boundaries/element-types': 'off'}}]
}
