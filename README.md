# @deveodk/vue-animate

<img src="https://cloud.githubusercontent.com/assets/7561792/26754760/0f3431e2-4881-11e7-88c1-a03915000c25.png" width="100%" />

[![npm](https://img.shields.io/npm/v/@deveodk/vue-animate.svg)](https://www.npmjs.com/package/@deveodk/vue-animate) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Vue-animate provides an easy way to use beautiful animations for your page. Ideal for hero style landing pages

## Installation

```bash
npm install --save @deveodk/vue-animate
```

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import vueAnimate from '@deveodk/vue-animate'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import '@deveodk/vue-animate/dist/@deveodk/vue-animate.css'

Vue.use(vueAnimate)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="@deveodk/vue-animate/dist/@deveodk/vue-animate.css"></link>
<script src="@deveodk/vue-animate/dist/@deveodk/vue-animate.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/@deveodk/vue-animate/dist/@deveodk/vue-animate.css"></link>
<script src="https://unpkg.com/@deveodk/vue-animate"></script>
```

## Usage

There are currently four available animations

```html
# Abstract can accept the reactive params speed and fraction
<abstract-hue></abstract-hue>
<abstract-saturation></abstract-saturation>
<ring-blue></ring-blue>
<ring-green></ring-green>
```


## License

[MIT](http://opensource.org/licenses/MIT)

<img src="https://cloud.githubusercontent.com/assets/7561792/26679305/bc4d7bda-46d4-11e7-9270-3f6cacdd0ae9.png" width="100%" />
