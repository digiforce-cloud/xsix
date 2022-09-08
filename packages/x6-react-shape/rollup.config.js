import config from '../../configs/rollup-config'

export default config({
  output: [
    {
      name: 'X6ReactShape',
      format: 'umd',
      file: 'dist/x6-react-shape.js',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDom',
        '@digiforce-cloud/x6': 'X6',
      },
    },
  ],
  external: ['@digiforce-cloud/x6', 'react', 'react-dom'],
})
