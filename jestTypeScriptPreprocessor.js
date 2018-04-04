const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    return path.endsWith('.ts')
      ? tsc.transpile(src, tsConfig.compilerOptions, path, [])
      : src;
  },
};
