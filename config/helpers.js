import path from 'path'

// Paths

const ROOT = process.cwd()
const SRC_DIR = path.resolve(ROOT, 'src')
const MODULES_DIR = path.resolve(ROOT, 'node_modules')

// Regexes

const modulePathsTest = /(node_modules|bower_components)/

export {
  ROOT,
  SRC_DIR,
  MODULES_DIR,
  modulePathsTest
}
