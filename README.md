# resolve-dependency

[![npm version](https://badge.fury.io/js/resolve-dependency.svg)](https://npmjs.org/package/resolve-dependency)

`resolve-dependency` Finds The File That Dependency Path Resolves To.

```sh
yarn add -E resolve-dependency
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async resolveDependency(path: string, relativeFrom?: string): { path: string, isDir: boolean }`](#async-resolvedependencypath-stringrelativefrom-string--path-string-isdir-boolean-)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import resolveDependency from 'resolve-dependency'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `async resolveDependency(`<br/>&nbsp;&nbsp;`path: string,`<br/>&nbsp;&nbsp;`relativeFrom?: string,`<br/>`): { path: string, isDir: boolean }`

For the path that is used to require a module from another module, find the destination of the actual file on the file system. This includes the index JS and JSX files of directories. The second `relativeFrom` argument is used to point to the file in which the path is required from.

```js
/* yarn example/ */
import resolveDependency from 'resolve-dependency'
import { resolve } from 'path';

(async () => {
  // 1. Resolve index.js from directory
  const res = await resolveDependency('./example')
  console.log(res)
  // 2. Resolve index.jsx from directory
  const res2 = await resolveDependency('./example/jsx')
  console.log(res2)
  // 3. Resolve file
  const res3 = await resolveDependency('./example/example')
  console.log(res3)
  // 4. Resolve relative dependency
  const res4 = await resolveDependency('./lib', 'example/jsx/index.js')
  console.log(res4)
  // 4. Resolve absolute dependency
  const res5 = await resolveDependency(
    './lib', resolve('example/jsx/index.js'))
  console.log(res5)
})()
```
```
{ path: 'example/index.js', isDir: true }
{ path: 'example/jsx/index.jsx', isDir: true }
{ path: 'example/example.js', isDir: false }
{ path: 'example/jsx/lib/index.js', isDir: true }
{ path: '/Users/zavr/adc/resolve-dependency/example/jsx/lib/index.js',
  isDir: true }
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<Footer />

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>