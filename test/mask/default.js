import makeTestSuite from '@zoroaster/mask'
import resolveDependency from '../../src'

export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await resolveDependency(input, this.relative)
    return res
  },
  jsonProps: ['expected'],
})