module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      extend: {
        height: {
            600: '600px',
            200: '200px'
        }
      },
    },
    variants: {},
    plugins: [],
  }