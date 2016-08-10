import path from 'path'

// Paths

export const cwd = process.cwd()
export const srcDir = path.resolve(cwd, 'src')
export const nodeModulesDir = path.resolve(cwd, 'node_modules')

// Regexes

export const modulePathsTest = /(node_modules|bower_components)/
