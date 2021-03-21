const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'prettier/prettier': [RULES.ERROR, { endOfLine: 'auto' }],
    'comma-dangle': RULES.OFF,
    'space-before-function-paren': RULES.OFF,
    semi: 0,
  },
};
