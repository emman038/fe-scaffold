import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      'build/',
      'dist/',
      'node_modules/',
      'coverage/',
      'eslint.config.mjs',
      '.prettierrc.js',
      '__mocks__/',
      '**/*.config.js',
      '**/*.config.mjs',
      'jest.config.js',
      'setupTests.js',
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
        createDefaultProgram: true,
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tseslint,
      import: importPlugin,
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

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
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
