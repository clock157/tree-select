export default {
  plugins: [
    [
      'umi-plugin-library', {
        sourcemap: true,
        esm: {
          file: 'dist/index.esm.js'
        },
        cjs: {
          file: 'dist/index.js'
        },
        umd: {
          file: 'dist/index.umd.js'
        }
      }
    ]
  ],
}
