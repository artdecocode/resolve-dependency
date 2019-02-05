import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import resolveDependency from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await resolveDependency({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
