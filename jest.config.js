module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/jestTypeScriptPreprocessor.js',
  },
  testMatch: [
    '**/__tests__/*.+(ts|tsx|js)',
  ],
};
