import path from 'path'
import { cwd, srcDir, nodeModulesDir } from './shared'

export const baseConfig = {
  context: cwd,
  entry: {
    main: './src'
  },
  resolve: {
    root: [srcDir, nodeModulesDir]
  },
  output: {
    path: path.join(cwd, 'build'),
    filename: 'bundle.js'
  }
}

export default baseConfig
