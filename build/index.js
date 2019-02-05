const { debuglog } = require('util');

const LOG = debuglog('resolve-dependency')

/**
 * Find The File That Dependency Path Resolves To.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               async function resolveDependency(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('resolve-dependency called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = resolveDependency
//# sourceMappingURL=index.js.map