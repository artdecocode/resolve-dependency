import makeTestSuite from '@zoroaster/mask'
import resolveDependency from '../../src'

export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await resolveDependency(this.input, this.relative)
    return res
  },
  jsonProps: ['expected'],
})