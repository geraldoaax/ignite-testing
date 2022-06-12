module.exports = {
  testeIgnorePatterns: ["node_modules", "/.next/"],
  seturFilesAfterEnv: ["<rootDir>/src/testes/setupTestes.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testeEnvironment: "jsdom",
};
