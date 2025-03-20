import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['build/'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      '**/*.config.js',
      '**/*.config.mjs',
      '.prettierrc.js',
      '__mocks__/**/*.js',
    ],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  {
    files: ['**/*.test.js', '**/*.test.ts', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
