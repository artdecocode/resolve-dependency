/* yarn example/ */
import resolveDependency from '../src'

(async () => {
  const res = await resolveDependency({
    text: 'example',
  })
  console.log(res)
})()