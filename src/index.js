import exists from '@wrote/exists'
import { dirname, join, relative } from 'path'

/**
 * For the given local path that can omit the JS/JSX extension and point to a directory (e.g., `./lib` or `./lib/example`), find that file on the filesystem.
 * @param {string} path The dependency path, to resolve e.g., `./lib`.
 * @param {string} [relativeFrom] The optional path of the file that imports the given path.
 */
const resolveDependency = async (path, relativeFrom) => {
  if (relativeFrom) {
    const d = dirname(relativeFrom)
    path = join(d, path)
  }
  let e = await exists(path)
  let res = path
  let isDir = false
  if (!e) {
    let p = `${path}.js`
    e = await exists(p)
    if (!e) p = `${path}.jsx`; e = await exists(p)
    if (!e) throw new Error(`${path}.js or ${path}.jsx is not found.`)
    res = p
  } else if (e.isDirectory()) {
    let p = `${path}/index.js`
    e = await exists(p)
    if (!e) p = `${p}x`; e = await exists(p)
    if (!e) throw new Error(`index.jsx? file is not found in ${path}.`)
    res = p
    isDir = true
  }
  return {
    path: path.startsWith('.') ? relative('', res) : res,
    isDir,
  }
}

export default resolveDependency