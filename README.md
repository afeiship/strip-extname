# strip-extname
> Trim a file extension from a String.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/strip-extname
```

## usage
```js
import stripExtname from '@jswork/strip-extname';

const src = 'path/subpath/file.txt.js';
const result1 = stripExtname(src, true);
const result2 = stripExtname(src);

//path/subpath/file
//path/subpath/file.txt
```

## license
Code released under [the MIT license](https://github.com/afeiship/strip-extname/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/strip-extname
[version-url]: https://npmjs.org/package/@jswork/strip-extname

[license-image]: https://img.shields.io/npm/l/@jswork/strip-extname
[license-url]: https://github.com/afeiship/strip-extname/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/strip-extname
[size-url]: https://github.com/afeiship/strip-extname/blob/master/dist/strip-extname.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/strip-extname
[download-url]: https://www.npmjs.com/package/@jswork/strip-extname
