/* yarn example/ */
import resolveDependency from '../src'
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