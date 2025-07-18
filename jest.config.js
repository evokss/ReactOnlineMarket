module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // For React
  testMatch: ['**/*.spec.ts', '**/*.test.ts', '**/*.spec.js', '**/*.test.js'], // Support both .ts and .js
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Handle CSS imports
  },
};
