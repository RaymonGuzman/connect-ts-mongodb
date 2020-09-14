module.exports = {
  extends: [
  "airbnb-typescript",
  "airbnb/hooks",
  "plugin:@typescript-eslint/recommended",
  "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
  }
};
// {
//   "parser": "@typescript-eslint/parser",
//   "plugins": ["@typescript-eslint"],
//   "rules": {
//     "semi": ["error", "never"],
//     "quotes": [2, "single"]
//   }
// }