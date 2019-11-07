![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=for-the-badge)

<img alt="WebComponent PWC Color Picker" src="assets/logo.png" width="1050"/>


[![Fully customizable color-picker web component with StencilJS via Paraboly](https://img.shields.io/badge/-Fully%20customizable%20animated--checkbox%20web%20component%20with%20StencilJS%20via%20Paraboly-lightgrey?style=for-the-badge)](https://github.com/Paraboly/pwc-color-picker)


[![npm version](https://img.shields.io/npm/v/@paraboly/pwc-color-picker.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-color-picker)
[![npm](https://img.shields.io/npm/dt/@paraboly/pwc-color-picker.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/pwc-color-picker)
![Platform - Platform Free Web](https://img.shields.io/badge/-Web%20%7C%20Platform%20Free-blue?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)


## Basic color-picker Screenshots

<p align="center">
  <img alt="WebComponent PWC Color Picker" src="assets/example.gif" width="49%" />
  <img alt="WebComponent PWC Color Picker" src="assets/example.png" width="49%" />
</p>

## [Live Codepen Example](your-code-pen-url-is-here)

## Installation

### Script tag

- Put a script tag similar to this `<script	type="module" src="https://unpkg.com/@paraboly/pwc-color-picker@latest/dist/pwc-color-picker/pwc-color-picker.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @paraboly/pwc-color-picker --save`
- Put a script tag similar to this `<script src='node_modules/@paraboly/pwc-color-picker/dist/pwc-color-picker.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @paraboly/pwc-color-picker --save`
- Add an import to the npm packages `import @paraboly/pwc-color-picker;`
- Then you can use the element anywhere in your template, JSX, html etc


# Usage

```html
<color-picker
    colors='["#951955","#130394","#444444","#989898", "#101516"]'
></color-picker>
```

## Checkbox onCheckChange Listener Usage

### JS Way

Also you can put this code into your html inside script tags. You can check the example as index.html
```js
const component = document.querySelector("color-picker");
component.addEventListener("colorPickedEvent", event => {
   console.log("Event: ", event.detail);
});
component.colors = [
   "#989898",
   "#101516",
   "#951955",
   "#130394",
   "#444444"
];
```

## Authors

Şevval Eygül

## License

WebComponent PWC Color Picker is available under the MIT license. See the LICENSE file for more info.
