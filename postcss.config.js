module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions'],
      ignoreUnknownVersions: true,
      features: {
        'print-color-adjust-property': false,
      },
    },
  },
}
