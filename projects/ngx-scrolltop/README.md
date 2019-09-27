[![Join the chat at https://gitter.im/ngx-scrolltop/Lobby](https://badges.gitter.im/ngx-scrolltop/Lobby.svg)](https://gitter.im/ngx-scrolltop/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

# Angular ScrollTop Button

Lightweight, **Material Design inspired button for scroll-to-top** of the page. No dependencies. **Pure Angular!**

**Support for Angular 8 an Ivy!**

Just hit the button to smoothly scroll back to the top of the page. [Here's the demo.](http://bartholomej.github.io/ngx-scrolltop/)

- Lightweight _(~10 kB)_
- No dependencies
- Material Design inspired
- `@angular/material` compatible ([example](#angular-material-example-directive))
- Component or directive way
- Smoothly animated
- Highly customizable [options](#options)...

![Demo animation](https://github.com/bartholomej/material-scrollTop/blob/master/demo/images/material-scrolltop-animation.gif)

## Demo (example)

Watch this: [http://bartholomej.github.io/ngx-scrolltop/
](http://bartholomej.github.io/ngx-scrolltop/)

## Install

### Automatically (recommended) 🚀

```bash
ng add ngx-scrolltop
```

**Everything's done!**

_Now just see some [options](#options)._

_(Module imported and all settings automatically set in your project.)_

### Manually (old-school) 🛠

Via **yarn** or **npm**

```bash
yarn add ngx-scrolltop # npm install ngx-scrolltop --save
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
<span
  ngxScrollTop
  class="my-custom-element-with-my-style__no-lib-style-applied-here"
>
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
| **symbol**          | string                                                                         |           | You can use utf8 chars for customizing symbol. For example: `↑`                                                                                                                                          |
| **position**        | 'left' \| 'right'                                                              | 'right'   | Left or right, that is the question...                                                                                                                                                                   |
| **theme**           | [NgxScrollTopTheme](projects/ngx-scrolltop/src/lib/ngx-scrolltop.interface.ts) | 'gray'    | Material color themes                                                                                                                                                                                    |

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
  symbol="↑"
  mode="smart"
  position="left"
  theme="pink"
>
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

No dependencies! Pure Angular.

## License

Copyright &copy; 2019 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
