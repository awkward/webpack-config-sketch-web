import fs from 'fs'
import path from 'path'

// Paths

export const ROOT = process.cwd()
export const SRC_DIR = path.resolve(ROOT, 'src')
export const MODULES_DIR = path.resolve(ROOT, 'node_modules')

// Env

const env = process.env.NODE_ENV || 'development'
export const isDev = env === 'development'
export const isProd = env === 'production'

// Regexes

export const modulePathsTest = /(node_modules|bower_components)/

// Helper functions

export function fileExists (filePath) {
  try {
    return fs.statSync(filePath).isFile()
  } catch (err) {
    return false
  }
}
