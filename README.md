# lazy.js [![Build Status](https://secure.travis-ci.org/mercadolibre/lazy.js.png)](http://travis-ci.org/mercadolibre/lazy.js) [![devDependency Status](https://david-dm.org/mercadolibre/lazy.js/dev-status.png)](https://david-dm.org/mercadolibre/lazy.js#info=devDependencies)

> A tiny and dependency-free JavaScript library for lazy loading resources.

## What kind of resources can I load?

- Images
- Scripts
- Styles
- Iframes
- Videos
- Audios
- Background images.

## How-to

You should add the library (inline) into your HTML file:

```html
<script>
    /*! lazy.js v0.0.1 Released under the MIT license. */!function(a){"use strict";function b(a){a=a||document.querySelectorAll("[data-lazy]");var b,c,d,e=0;for(void 0===a.length&&(a=[a]),b=a.length,e;b>e;e+=1)c=a[e],d=c.getAttribute("data-lazy"),""!==d&&(c["LINK"!==c.tagName?"src":"href"]=d),c.removeAttribute("data-lazy")}a.lazy=b}(this);
</script>
```

#### Images
```html
<img data-lazy="http://foo.bar.com/foobar.png" width="400" height="300">
```

```js
window.onload = function () {
    lazy();
};
```

#### Script
```html
<script data-lazy="http://foobar.com/foo.js"></script>
```

```js
window.onload = function () {
    lazy();
};
```

#### Style
```html
<link data-lazy="http://foobar.com/foo.js" rel="stylesheet">
```

```js
window.onload = function () {
    lazy();
};
```

#### Iframe
```html
<iframe data-lazy="http://foobar.com" src="javascript:false"></iframe>
```

```js
window.onload = function () {
    lazy();
};
```

#### Video
```html
<video data-lazy="http://foobar.com/bar.mp4" controls></video>
```

```js
window.onload = function () {
    lazy();
};
```

#### Audio
```html
<audio data-lazy="http://foobar.com/foo.mp3" controls></audio>
```

```js
window.onload = function () {
    lazy();
};
```

### Background Images
```css
/* You must add the following CSS snippet */
[data-lazy] {
    background-image: none !important;
}

/* Your own CSS */
.box {
    width: 400px;
    height: 300px;
    background: url('http://foobar.com/foobar.png') no-repeat center center;
}
```

```html
<div data-lazy class="box"></div>
```

```js
window.onload = function () {
    lazy();
};
```

### Progressive Enhancement is still important
For example, to show images when JavaScript is not enabled you should include the images inside `<noscript>`.
```html
<img data-lazy="foo.jpg" width="400" height="300">
<noscript>
    <img src="foo.jpg" width="400" height="300">
</noscript>
```

## API

### lazy([nodes])
Loads resources asynchronously on-demand.
- `nodes` (optional): [NodeList] - An node element or a collection of node elements. Default: the result of `querySelectorAll('[data-lazy]')`.

```html
<img data-lazy="http://foo.bar.com/foo.png" width="400" height="300">
<img data-lazy="http://foo.bar.com/bar.png" width="400" height="300">

<img data-lazy="http://foo.bar.com/foobar.png" width="400" height="300" id="onscroll">
```

```js
window.onload = function () {
    lazy();
};

window.onscroll = function () {
    var ondemand = document.getElementById('onscroll');

    lazy(ondemand);
};
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
- `grunt dist`: Creates a distrubution version of `lazy.js`. You should find two files: `.dist/lazy.js` and `.dist/lazy.min.js`.

## Contribute

Please read through our code style guide:
- [JavaScript](https://github.com/mercadolibre/javascript-style-guide)

## Maintained by

- Guille Paz (guillermo.paz@mercadolibre.com)

## Credits

![MercadoLibre](http://static.mlstatic.com/org-img/chico/img/logo-mercadolibre-new.png)

## License
Licensed under the MIT license.

Copyright (c) 2013 [MercadoLibre](http://github.com/mercadolibre).
