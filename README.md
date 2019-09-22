[![Join the chat at https://gitter.im/ngx-scrolltop/Lobby](https://badges.gitter.im/ngx-scrolltop/Lobby.svg)](https://gitter.im/ngx-scrolltop/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

# Angular ScrollTop Button (alpha version)

Lightweight, **Material Design inspired button for scroll-to-top** of the page. No dependencies. **Pure Angular!**

**Support for Angular 8 an Ivy!**

Just hit the button to smoothly scroll back to the top of the page. [Here's the demo.](http://bartholomej.github.io/ngx-scrolltop/)

- Lightweight
- Material Design inspired
- Smoothly animated
- Customizable
- With some useful [options](#settings)...

![Demo animation](https://github.com/bartholomej/material-scrollTop/blob/master/demo/images/material-scrolltop-animation.gif)

## Demo (example)

Watch this: [http://bartholomej.github.io/ngx-scrolltop/
](http://bartholomej.github.io/ngx-scrolltop/)

## Install

Via **yarn** or **npm**

```bash
yarn add ngx-scrolltop # npm install ngx-scrolltop --save
```

## Setup

```js
...
import { NgxScrollTopModule } from 'ngx-scrolltop';
...

@NgModule({
  imports: [
    ...
    NgxScrollTopModule.forRoot()
  ],
  ...
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

In **app.component.html** you just need to add your new button. Usually at the end of file.

```html
<ngx-scrolltop></ngx-scrolltop>
```

## Options

| Option          | Type               | Default   | Description                                                                                                                                                                                              |
| --------------- | ------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode            | 'smart', 'classic' | 'classic' | **Smart** mode shows button only when you scroll more than two screens down and then you will try to go back to top. **Classic** mode shows button immediately when you scroll at least one screen down. |
| backgroundColor | string             | #212121   | Background color (you can use all values for `backgroud-color` css property)                                                                                                                             |
| symbolColor     | string             | #fafafa   | Symbol color (you can use all values for `fill` svg property)                                                                                                                                            |
| size            | number             | 40        | Button size(in pixels). Symbol will be resized automatically.                                                                                                                                            |
| symbol          | string             |           | You can use utf8 chars for customizing symbol. For example: `↑`                                                                                                                                          |
| position        | 'left', 'right'    | 'right'   | Left or right, that is the question.                                                                                                                                                                     |

### Options: Example

**app.component.html**

```html
<ngx-scrolltop
  [size]="50"
  backgroundColor="#33691e"
  symbolColor="#fff"
  symbol="↑"
  mode="smart"
  position="left"
>
</ngx-scrolltop>
```

## Dependencies

No dependencies

## License

Copyright &copy; 2019 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
