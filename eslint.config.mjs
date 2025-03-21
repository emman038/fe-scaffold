import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['build/', 'eslint.config.mjs', '.prettierrc.js'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tseslint,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.config.js', '**/*.config.mjs', '__mocks__/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
      parserOptions: {
        project: null,
      },
    },
  },
  {
    files: ['**/*.test.js', '**/*.test.ts', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: globals.jest ?? { jest: true },
    },
  },
];
