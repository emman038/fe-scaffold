import path from 'path';
import { fileURLToPath } from 'url';
import airbnb from 'eslint-config-airbnb';
import tsairbnb from 'eslint-config-airbnb-typescript';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import checkFile from 'eslint-plugin-check-file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ['configs/eslint/eslint.config.mjs', 'dist/**', 'coverage/**'],
  },
  {
    languageOptions: {
      parser: tsParser, // Specifies the ESLint parser
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        project: ['*/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    files: ['**/*.ts', '**/*tsx'],
    plugins: {
      import: importPlugin,
      tsairbnb,
      prettier: eslintPluginPrettier,
      react: reactPlugin,
      '@typescript-eslint': tseslint,
      'check-file': checkFile,
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      ...airbnb.rules,
      ...tsairbnb.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/interface-name-prefix': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: true, peerDependencies: true },
      ],
      'react/jsx-filename-extension': [0],
      'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
      'react/default-props-match-prop-types': [
        0,
        { allowRequiredDefaults: true },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          packageDir: './',
        },
      ],
      'import/prefer-default-export': 'off',
      'check-file/folder-naming-convention': [
        'error',
        {
          '**/components/*/': 'CAMEL_CASE',
          'src/routes/*/': 'CAMEL_CASE',
        },
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/components/**/!(index)*.tsx': 'PASCAL_CASE',
          'src/**/routes/*/!(index)*.tsx': 'PASCAL_CASE',
          'src/**/routes/!(index)*.tsx': 'PASCAL_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],
      'react/jsx-pascal-case': 'error',
      'check-file/filename-blocklist': [
        'error',
        { '**/*.spec.*': '**/*.test.*' },
      ],
    },
  },
];
