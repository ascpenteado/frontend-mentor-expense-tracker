# Frontend Mentor - Expenses chart component solution


This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://frontend-mentor-expense-tracker.vercel.app/](https://frontend-mentor-expense-tracker.vercel.app/)


### Built with

- Vue3 - Composition API
- SCSS

### What I learned

This project main goal was to learn Vue3. This is my first contact with Vue and I found it to be very pleaseant to work with. I enjoyed the Single File Component (SFC) structure and the Composition API makes it easy to keep the front-end code organized and clean.

### Continued development

I still have to try a lot of the reactivity features of Vue, data fetching and state management.

## Author

- Linkedin - [in/arthurpenteado](https://www.linkedin.com/in/arthurpenteado/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ascpenteado)
- My blog - [https://artcodes.dev](https://artcodes.dev)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).






## Project Setup

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# When testing on CI, must build the project first
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
