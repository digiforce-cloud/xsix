import config from '../../configs/rollup-config'

export default config({
  output: [
    {
      name: 'X6VueShape',
      format: 'umd',
      file: 'dist/x6-vue-shape.js',
      sourcemap: true,
      globals: {
        vue: 'Vue',
        '@vue/composition-api': 'VueCompositionAPI',
        '@digiforce-cloud/x6': 'X6',
      },
    },
  ],
  external: ['@digiforce-cloud/x6', '@vue/composition-api', 'vue'],
})
