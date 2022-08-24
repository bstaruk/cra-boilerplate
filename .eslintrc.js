const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'airbnb',
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['**/*.js?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-param-reassign': [
      /* More info: https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations */
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'prettier/prettier': ['error', prettierOptions],
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
