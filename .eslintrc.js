module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  // "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": [
      "warn"
    ],
    "no-unused-vars":[
      "warn"
    ],
    "max-len":[
      "error",
      150
    ],
    "linebreak-style": [
      "off",
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/jsx-tag-spacing":[
      "off"
    ],
    "react/jsx-filename-extension":[
      "off"
    ],
    "no-console":[
      "off"
    ],
    "react/prefer-stateless-function": [
      1
    ]
  }
};