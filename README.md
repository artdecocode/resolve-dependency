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
import { resolve } from 'path'

(async () => {
  // 1. Resolve index.js from directory
  const res = await resolveDependency('./example/dir')
  console.log(res)
  // 2. Resolve index.jsx from directory
  const res2 = await resolveDependency('./example/jsx')
  console.log(res2)
  // 3. Resolve file without extension
  const res3 = await resolveDependency('./example/dir/index')
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
{ path: 'example/dir/index.js', isDir: true }
{ path: 'example/jsx/index.jsx', isDir: true }
{ path: 'example/dir/index.js', isDir: false }
{ path: 'example/jsx/lib/index.js', isDir: true }
{ path: '/Users/zavr/adc/resolve-dependency/example/jsx/lib/index.js',
  isDir: true }
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a>   2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>