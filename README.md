# webpack-config-sketch-web

This package contains Webpack configuration commonly used in Sketch Web projects.

**Features**

- Hot reloading
- Transpile ES6+ and Sass code
- Compile Sass
- Use CSS modules by suffixing your CSS filename with `.module.(s)css`.

## Installation

```
npm i -D @awkward/webpack-config-sketch-web
```

## Usage

**1. Install**

```
npm i -D @awkward/webpack-config-sketch-web
```

**2. Create a webpack.config.js file**

`webpack.config.js`

```js
import createConfig from '@awkward/webpack-config-sketch-web'

export default createConfig({
  // Entry point
  in: 'src/App.js',

  // Directory to output the build
  out: 'dist'
})
```
