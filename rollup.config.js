export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/bundles/ng2-gridstack.umd.js',
        format: 'umd'
    },
    sourcemap: true,
    name: 'gridstack',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
    },
    external: [
        '@angular/core',
        '@angular/common'
    ]
  }