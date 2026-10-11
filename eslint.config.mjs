import js from '@eslint/js';
import next from 'eslint-config-next';
import nextTypescript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...next,
  ...nextTypescript,
  prettierRecommended,
  globalIgnores(['.next/**', '.prettierrc.mjs', 'out/**'])
]);

export default eslintConfig;
