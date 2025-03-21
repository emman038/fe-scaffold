import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      'build/',
      'dist/',
      'node_modules/',
      'coverage/', // Ignore coverage reports
      'eslint.config.mjs',
      '.prettierrc.js',
      '__mocks__/',
      '**/*.config.js',
      '**/*.config.mjs',
      'jest.config.js',
      'setupTests.js', // Ignore this file for linting
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        createDefaultProgram: true, // Helps ESLint handle non-TypeScript files
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
    files: ['**/*.test.js', '**/*.test.ts', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: globals.jest ?? { jest: true },
    },
  },
];
