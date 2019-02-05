import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import resolveDependency from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof resolveDependency, 'function')
  },
  async 'calls package without error'() {
    await resolveDependency()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await resolveDependency({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T