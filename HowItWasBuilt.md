## How it was built (2020)

#### Create nextjs project

```bash
npx create-react-app boilerplate-cra-typescript --template typescript
```

#### Typescript

Add in `tsconfig.json`

```bash
"baseUrl": "src",
"exclude": ["node_modules"],
```

#### EditorConfig

_It will start the files with some settings like the tab size.._

Create the file `.editorConfig` and add the settings.

#### Eslint

_Find and fix problems in javascript code._

react-scripts contains eslint.

The `.eslintrc.json` file will be created.

React Hooks Lint.

```bash
yarn add --dev eslint-plugin-react-hooks
```

In `.eslintrc.json`

```bash
"plugins": ["react", "react-hooks", "@typescript-eslint"]
"rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
}
```

Disable prop-types.

```bash
"rules": { ..., "react/prop-types": "off" }
```

Disable explicit module boundary types, it warns that it is always necessary to inform the type of the functions return.

```bash
"rules": { ..., "@typescript-eslint/explicit-module-boundary-types": "off" }
```

Config to React Version.

```bash
"settings": { "react": { "version": "detect" } }
```

In `package.json`

```bash
"scripts": { ..., "lint": "eslint src" }
```

#### Prettier(with ESLint)

_To format file like use single quote to everybody dev..._

```bash
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

In `.eslintrc.json`

```bash
"extends": [..., "plugin:prettier/recommended"]
```

Create file `.prettierrc` and add the settings.
Create file `.vscode/settings.json` and add the settings.

#### git hook with Husky and Lint-Staged

_Prevent errors in commits._

```bash
yarn add --dev lint-staged husky
```

In `package.json`

```bash
"scripts": { ..., "lint": "eslint src --max-warnings=0" },
"husky": { "hooks": {  "pre-commit": "lint-staged" } },
"lint-staged": { "src/**/*": ["yarn lint --fix"] }
```

#### Jest

_Framework of test._

CRA already contains jest.

`.eslintrc.json`

```bash
"env": { ..., "jest": true, "node": true }
```

Create `jest.config.js` file and add the settings.

In `package.json`

```bash
"jest": {
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/**/**/stories.tsx",
    "!src/**/**/styles.{ts,tsx}",
    "!src/styles/*.{ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  }
},
"scripts": {
  ...,
  "test": "react-scripts test --coverage",
  "test:watch": "yarn test --watch"
},
```

#### Testing Library and jest-dom

_Testing Library: Library of tests to work with react components._
_jest-dom: Matchers of Jest_
[Download Testing Library Cheat Sheet](https://github.com/testing-library/react-testing-library/raw/master/other/cheat-sheet.pdf)

CRA already contains testing library and jest-dom.

In `package.json`
`--bail` _to stop in first error_
`--findRelatedTests` _Run tests just in testable changed files_

```bash
"lint-staged": { "src/**/*": [..., "yarn test --findRelatedTests --bail"] }
```

#### Styled-components

_css-in-js._

```bash
yarn add --dev @types/styled-components
```

```bash
yarn add styled-components
```

Jest integration.

```bash
yarn add --dev jest-styled-components
```

In `src/setupTests.ts`

```bash
import 'jest-styled-components'
```

#### Storybook

_To preview components and your documentation._

```bash
npx -p @storybook/cli sb init --type react
```

Will be create `.storybook` and `stories` folders

Will be modified `package.json`
After insert in `scripts storybook and build-storybook` the params `-s ./public` to use static images.

```bash
"scripts": {
    ...,
    "storybook": "start-storybook -s ./public -p 6006",
    "build-storybook": "build-storybook -s ./public"
},
"devDependencies": {
    "@babel/core": "^7.10.4",
    ...,
    "@storybook/addon-actions": "^5.3.19",
    "@storybook/addon-links": "^5.3.19",
    "@storybook/addons": "^5.3.19",
    "@storybook/preset-typescript": "^3.0.0",
    "@storybook/react": "^5.3.19",
    ...,
    "babel-loader": "^8.1.0",
    ...
}
```

```bash
yarn add --dev @storybook/preset-create-react-app
```

In `.storybook/main.js`

```bash
stories: ['../src/components/**/stories.tsx']
addons: ['@storybook/preset-create-react-app', ...]
```

Create decorator `.storybook/withGlobalStyles.tsx` and add settings.
Create `.storybook/config.js` and add settings.

Addon Knobs

```bash
yarn add --dev @storybook/addon-knobs
```

In `.storybook/main.js`

```bash
addons: [..., '@storybook/addon-knobs/register']
```

In `src/components/Main/stories.tsx`

```bash
import { withKnobs, text } from '@storybook/addon-knobs'
```

#### PWA

_To work offline, push notifications and more._

Install cross-env to set NODE_ENV in windows

```bash
npm i -g cross-env
```

```bash
cross-env NODE_ENV=production yarn build
```

Will be create `public/sw.js` and `public/workbox-*.js`.
Add both in `.gitignore`
