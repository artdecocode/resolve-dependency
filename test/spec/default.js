import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import resolveDependency from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof resolveDependency, 'function')
  },
  async 'resolves js index'() {
    const { isDir, path } = await resolveDependency('test/fixture/js')
    ok(isDir)
    equal(path, 'test/fixture/js/index.js')
  },
  async 'resolves jsx index'() {
    const { isDir, path } = await resolveDependency('test/fixture/jsx')
    ok(isDir)
    equal(path, 'test/fixture/jsx/index.jsx')
  },
  async 'resolves existing file'() {
    const { isDir, path } = await resolveDependency('test/fixture/package.json')
    ok(!isDir)
    equal(path, 'test/fixture/package.json')
  },
  async 'resolves relative dep'() {
    const { isDir, path } = await resolveDependency('./jsx', 'test/fixture/index.js')
    ok(isDir)
    equal(path, 'test/fixture/jsx/index.jsx')
  },
  async 'resolves a file'() {
    const { isDir, path } = await resolveDependency('test/fixture/jsx/index')
    ok(!isDir)
    equal(path, 'test/fixture/jsx/index.jsx')
  },
  async 'resolves relative directory'() {
    const { isDir, path } = await resolveDependency('./jsx', 'test/fixture/index.js')
    ok(isDir)
    equal(path, 'test/fixture/jsx/index.jsx')
  },
}

export default T