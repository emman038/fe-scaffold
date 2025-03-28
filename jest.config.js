module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!react-router-dom)/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '^react-router-dom$': require.resolve('react-router-dom'),
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index.ts$'],
};
