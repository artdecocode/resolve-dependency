let exists = require('@wrote/exists'); if (exists && exists.__esModule) exists = exists.default;
const { dirname, join, relative } = require('path');

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
    res = await checkSources(path)
    if (!res) throw new Error(`${path}.js or ${path}.jsx is not found.`)
  } else if (e.isDirectory()) {
    // first try file
    let fileChecked = false
    let fileRes
    if (!path.endsWith('/')) {
      fileRes = res = await checkSources(path)
      fileChecked = true
    }
    if (!fileRes) {
      res = await checkSources(join(path, 'index'))
      if (!res) {
        const s = fileChecked ? `${path}.jsx? does not exist, and ` : ''
        throw new Error(`${s}index.jsx? file is not found in ${path}`)
      }
      isDir = true
    }
  }
  return {
    path: path.startsWith('.') ? relative('', res) : res,
    isDir,
  }
}

const checkSources = async (path) => {
  let pp = `${path}.js`
  let e = await exists(pp)
  if (!e) pp = `${pp}x`; e = await exists(pp)
  if (e) return pp
}

module.exports=resolveDependency