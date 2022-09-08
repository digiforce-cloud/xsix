import config from '../../configs/rollup-config'

export default config({
  output: [
    {
      name: 'X6AngularShape',
      format: 'umd',
      file: 'dist/x6-angular-shape.js',
      sourcemap: true,
      globals: {
        angular: 'Angular',
        '@angular/cdk': 'AngularCDK',
        '@angular/core': 'AngularCore',
        '@angular/common': 'AngularCommon',
        '@digiforce-cloud/x6': 'X6',
      },
    },
  ],
  external: [
    '@digiforce-cloud/x6',
    '@angular/cdk',
    '@angular/core',
    '@angular/common',
  ],
})
