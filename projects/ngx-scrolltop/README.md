<p align="center">
  <img src="/_assets/ngx-scrolltop_logo.svg?sanitize=true" width="120">
  <h1 align="center">Angular ScrollTop Button</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-scrolltop.svg)](https://badge.fury.io/js/ngx-scrolltop)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-scrolltop.svg)](https://www.npmjs.com/ngx-scrolltop)
[![Join the chat at https://gitter.im/ngx-scrolltop/Lobby](https://badges.gitter.im/ngx-scrolltop/Lobby.svg)](https://gitter.im/ngx-scrolltop/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![](https://github.com/bartholomej/ngx-scrolltop/workflows/Build%20&%20Tests%20&%20Publish/badge.svg)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

> Lightweight, **Material Design inspired button for scroll-to-top** of the page.
> No dependencies.
> **Pure Angular!**

> ✓ Angular 13, Ivy and Angular Universal (SSR) compatible

Just hit the button to smoothly scroll back to the top of the page. [Here's the demo.](http://bartholomej.github.io/ngx-scrolltop/)

- Lightweight _(~2 kB gzipped)_
- No dependencies! _(only smooth scroll-behavior polyfill for iOS)_
- Material Design inspired
- `@angular/material` compatible ([example](#angular-material-example-directive))
- Component or directive way
- Smoothly animated
- a11y ready
- Highly customizable [options](#options)...
- Angular 13: Pure IVY support
- [Angular 5+ compatible](#compatibility)

![Demo animation](https://github.com/bartholomej/material-scrollTop/blob/master/demo/images/material-scrolltop-animation.gif?raw=true)

## Demo (example)

Watch this [demo page](http://bartholomej.github.io/ngx-scrolltop/)

Or play with it live on [stackblitz.com/edit/ngx-scrolltop](https://stackblitz.com/edit/ngx-scrolltop?file=src/app/app.component.html)

## Install

### Automatically (recommended) 🚀

> Not using latest version of Angular?
> [See our Angular compatibility instructions…](#compatibility)

```bash
ng add ngx-scrolltop # for Angular 12+ only! See our compatibility table
```

<!--
```bash
npm install ngx-translate-cut # For Angular 13. See compatibility table.
```

Choose the version corresponding to your Angular version: -->

**Everything's done!** _(module imported and all settings automatically set in your project.)_

_Now just see some [options and examples](#options)._

### Manually (old-school) 🛠

Via **yarn** or **npm**

```bash
npm install ngx-scrolltop --save # for Angular 12+ only! See our compatibility table

# npm install ngx-scrolltop@2 --save # for Angular 5 – 11
```

### Setup (manually)

```diff
...
+ import { NgxScrollTopModule } from 'ngx-scrolltop';
...

@NgModule({
  imports: [
    ...
+   NgxScrollTopModule
  ],
  ...
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Compatibility

Since `ngx-scrolltop` `v3`, the library is compiled with IVY and fully supports Angular12+ (you can't use this with older Angular version anymore!)

If you still need to use it with an older version of Angular, then use version 2, which is still available: `ng add ngx-scrolltop@2`

| Angular version | ngx-scrolltop | Install                  |
| --------------- | ------------- | ------------------------ |
| ng13            | v4.x.x        | `ng add ngx-scrolltop`   |
| ng12            | v4.x.x        | `ng add ngx-scrolltop`   |
| ng5 – ng11      | v2.x.x        | `ng add ngx-scrolltop@2` |

## Usage

### Component way (default)

In **app.component.html** you just need to add your new button. Usually at the end of file.

```html
<ngx-scrolltop></ngx-scrolltop>
```

### Directive way

**Your custom element somewhere in you application...**

**Important**: _(no style applied, everything is up to you. Of course I recommend `position: fixed`, ...)_

```html
<span ngxScrollTop class="my-custom-element-with-my-style__no-lib-style-applied-here">
  ↑ My Custom Element. ↑
</span>
```

## Options

### Component

| Option              | Type                                                                           | Default   | Description                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **mode**            | 'smart' \| 'classic'                                                           | 'classic' | **Smart** mode shows button only when you scroll more than two screens down and then you will try to go back to top. **Classic** mode shows button immediately when you scroll at least one screen down. |
| **backgroundColor** | string                                                                         | #212121   | Background color (you can use all values for `backgroud-color` css property). _You can override `theme` color_                                                                                           |
| **symbolColor**     | string                                                                         | #fafafa   | Symbol color (you can use all values for `fill` svg property). _You can override `theme` color_                                                                                                          |
| **size**            | number                                                                         | 40        | Button size [in pixels]. _(Symbol will be resized automatically_)                                                                                                                                        |
| ~~**symbol**~~      | ~~string~~                                                                     |           | ~~You can use utf8 chars for customizing symbol. For example: `↑`~~ Removed in v2.0.0. Use _content projection_. See example [here](#symbol)                                                             |
| **position**        | 'left' \| 'right'                                                              | 'right'   | Left or right, that is the question...                                                                                                                                                                   |
| **theme**           | [NgxScrollTopTheme](projects/ngx-scrolltop/src/lib/ngx-scrolltop.interface.ts) | 'gray'    | Material color themes                                                                                                                                                                                    |

#### Symbol

Since version v2.0.0 you can use _content projection_ for your own symbol.

```html
<ngx-scrolltop> ↑ </ngx-scrolltop>
```

Or you can even use your own components or fonts (e.g. fontAwesome)

```html
<ngx-scrolltop>
  <i class="fa fa-arrow-up"></i>
</ngx-scrolltop>
```

### Directive

| Option                 | Type                 | Default   | Description                                                                                                                                                                                              |
| ---------------------- | -------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[ngxScrollTopMode]** | 'smart' \| 'classic' | 'classic' | **Smart** mode shows button only when you scroll more than two screens down and then you will try to go back to top. **Classic** mode shows button immediately when you scroll at least one screen down. |

## Examples

### Advanced example (component)

**app.component.html**

```html
<ngx-scrolltop
  [size]="50"
  backgroundColor="#33691e"
  symbolColor="#fff"
  mode="smart"
  position="left"
  theme="pink"
>
  ↑
</ngx-scrolltop>
```

### Angular Material example (directive)

_[@angular/material](https://material.angular.io/components/button/overview) required_

**app.component.html**

```html
<button
  ngxScrollTop
  [ngxScrollTopMode]="'smart'"
  class="my-custom-style"
  color="primary"
  mat-mini-fab
>
  top
</button>
```

**app.component.scss**

```css
.my-custom-style {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

## Dependencies

Pure Angular! _(with smooth scroll-behaviour polyfill for iOS)_

<!-- ## 🧪 Experiments -->

## Development (notes for contributors)

### Publish Stable

```bash
yarn release:patch
# yarn release:minor
# yarn release:major
```

### Publish next channel

1. Bump version `-beta.0` in `package.json`
2. `yarn publish:next`

## FAQ

### Old version of Angular

#### Error

If you are using older Angular (5 – 11) you will see this error on build or start:

> ERROR in node_modules/ngx-scrolltop/lib/ngx-scrolltop.core.service.d.ts:13:21 - error TS2694: Namespace '"/Users/user/projects/my-project/node_modules/@angular/core/core"' has no exported member 'ɵɵFactoryDeclaration'.

#### Solution

Easy! Use compatibility version of this library `npm install ngx-scrolltop@2 --save`

[See our Angular compatibility instructions…](#compatibility)

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## License

Copyright &copy; 2021 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
