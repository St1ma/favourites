module.exports = {
  "env": {
    "es6": true,
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["airbnb", "plugin:@typescript-eslint/recommended"],
  "globals": {
    "__DEV__": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/prefer-default-export": ['off'],
    "import/extensions": 0,
    "import/no-unresolved": 0,
  }
};
