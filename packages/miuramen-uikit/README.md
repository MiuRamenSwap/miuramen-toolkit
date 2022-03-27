# 🍡 MiuRamen UIkit 🍵

[![Version](https://img.shields.io/npm/v/@miuramenswap-libs/uikit)](https://www.npmjs.com/package/@miuramenswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@miuramenswap-libs/uikit)](https://www.npmjs.com/package/@miuramenswap-libs/uikit)

MiuRamen UIkit is a set of React components and hooks used to build pages on MiuRamen's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @miuramenswap-libs/uikit`

## Setup

### Theme

Before using MiuRamen UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@miuramenswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@miuramenswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://miuramenswap.github.io/miuramen-uikit/)
