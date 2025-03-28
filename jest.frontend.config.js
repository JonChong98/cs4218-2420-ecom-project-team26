module.exports = {
  // name displayed during tests
  displayName: "frontend",

  // simulates browser environment in jest
  // e.g., using document.querySelector in your tests
  testEnvironment: "jest-environment-jsdom",

  // jest does not recognise jsx files by default, so we use babel to transform any jsx files
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // tells jest how to handle css/scss imports in your tests
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    // "^@/(.*)$": "<rootDir>/client/src/$1",
    // "^@pages/(.*)$": "<rootDir>/client/src/pages/$1",
    // "^@components/(.*)$": "<rootDir>/client/src/components/$1",
    // "^@context/(.*)$": "<rootDir>/client/src/context/$1",
  },

  // ignore all node_modules except styleMock (needed for css imports)s
  transformIgnorePatterns: ["/node_modules/(?!(styleMock\\.js)$)"],

  // only run these tests
  testMatch: [
    "<rootDir>/client/src/components/Routes/*.test.js",
    "<rootDir>/client/src/pages/admin/*.test.js",
    "<rootDir>/client/src/pages/Auth/*.test.js",
    "<rootDir>/client/src/pages/user/*.test.js",
    "<rootDir>/client/src/context/*.test.js",
    "<rootDir>/client/src/pages/*.test.js",
    "<rootDir>/client/src/hooks/*.test.js",
    "<rootDir>/client/src/pages/admin/*.test.js",
    "<rootDir>/client/src/components/*.test.js",
    "<rootDir>/client/src/components/Form/*.test.js",
    "<rootDir>/client/src/integration_tests/categoryProductIntegration.test.js",
  ],

  // jest code coverage
  collectCoverage: true,
  collectCoverageFrom: [
    "client/src/pages/Auth/**",
    "client/src/pages/user/**",
    "client/src/context/**",
    "client/src/pages/**",
    "client/src/hooks/**",
    "client/src/components/Form/**",
    "client/src/components/AdminMenu.js",
    "client/src/components/Footer.js",
    "client/src/components/Header.js",
    "client/src/components/Layout.js",
    "client/src/components/Spinner.js",
    "client/src/components/UserMenu.js",
    "client/src/components/Routes/Private.js",
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};
