# lazy.js [![Build Status](https://secure.travis-ci.org/mercadolibre/lazy.js.png)](http://travis-ci.org/mercadolibre/lazy.js) [![devDependency Status](https://david-dm.org/mercadolibre/lazy.js/dev-status.png)](https://david-dm.org/mercadolibre/lazy.js#info=devDependencies)

A tiny JavaScript library for lazy loading resources.

## What files can I load?

- Images
- Scripts
- Styles
- Iframes
- Videos
- Audios
- Bacground images.

### Examples

#### Images
```html
<img data-lazy="http://foo.bar.com/foobar.png" width="400" height="300">
```

#### Script
```html
<script data-lazy="http://foobar.com/foo.js"></script>
```

#### Style
```html
<link data-lazy="http://foobar.com/foo.js" rel="stylesheet">
```

#### Iframe
```html
<iframe data-lazy="http://foobar.com" src="javascript:false"></iframe>
```

#### Video
```html
<video data-lazy="http://foobar.com/bar.mp4" controls></video>
```

#### Audio
```html
<audio data-lazy="http://foobar.com/foo.mp3" controls></audio>
```

### Background Images
```css
[data-lazy] {
    background-image: none !important;
}

.box {
    width: 400px;
    height: 300px;
    background: url('http://foo.bar.com/foobar.png') no-repeat center center;
}
```

```html
<div data-lazy class="box"></div>
```

### Progressive Enhancement is still important
For example, to show images when JavaScript is not enabled you should include the images inside `<noscript>`.
```html
<img data-async="foo.jpg" width="400" height="300">
<noscript>
    <img src="foo.jpg" width="400" height="300">
</noscript>
```

## API

### lazy([nodes])
Loads resources asynchronously on-demand.
- `nodes` (optional): [NodeList] - A NodeList of elements. Default: the result of `querySelectorAll('[data-lazy]').

```js
var imgs = document.querySelectorAll('.on-demand');

lazy(imgs);
```

## Development setup
1. Install [Git](http://git-scm.com/) and [NodeJS](http://nodejs.org/).
2. Open your terminal and clone `mercadolibre/lazy.js` by running:

        $ git clone git@github.com:mercadolibre/lazy.js.git

3. Now go to the project's folder:

        $ cd lazy.js

4. Install its dependencies:

        $ npm install

5. Install `grunt-cli`:

        $ npm install grunt-cli -g

6. Develop! :)


## Grunt tasks

- `grunt dev`: Builds a development version.
- `grunt test`: Runs Jasmine tests.
- `grunt dist`: Creates a distrubution version of `lazy.js`. You should found two files: `.dist/lazy.js` and `.dist/lazy.min.js`.

## Contribute

Please read through our code style guide:
- [JavaScript](https://github.com/mercadolibre/javascript-style-guide)

## Maintained by

- Guille Paz ([@pazguille](https://twitter.com/pazguille))

## Credits

![MercadoLibre](http://static.mlstatic.com/org-img/chico/img/logo-mercadolibre-new.png)

## License
Licensed under the MIT license.

Copyright (c) 2013 [MercadoLibre](http://github.com/mercadolibre).
