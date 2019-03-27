import { equal, ok, throws } from 'zoroaster/assert'
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
  async 'throws when cannot be resolved'() {
    await throws({
      fn: resolveDependency,
      args: ['../notrun', 'test/fixture/both/run/doc.js'],
      message: 'test/fixture/both/notrun.jsx? does not exist, and index.jsx? file is not found in test/fixture/both/notrun',
    })
  },
}

export default T