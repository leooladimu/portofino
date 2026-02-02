module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: [
    '**/*.html',
    '!**/node_modules/**',
  ],
  transform: {},
  moduleFileExtensions: ['js', 'html'],
};