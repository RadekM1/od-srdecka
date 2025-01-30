import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
});

const eslintConfig = [
  ...compat.config({
    extends: ['eslint:recommended', 'next', 'plugin:prettier/recommended']
  }),
  {
    languageOptions: {
      globals: {
        React: 'readonly' // Definuje React jako globální proměnnou
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off' // Next.js nevyžaduje import Reactu
    },
    ignores: ['.next/*', '.prettierrc.js']
  }
];

export default eslintConfig;
