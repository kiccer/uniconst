import type { Options } from 'tsup'

const config: Options = {
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // 支持 ESM 和 CJS
  dts: true,              // 生成 .d.ts 类型声明
  sourcemap: true,        // 生成 Sourcemap
  clean: true,           // 构建前清理 dist 目录
}

export default config
