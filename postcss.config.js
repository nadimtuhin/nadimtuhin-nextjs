module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions'],
      ignoreUnknownVersions: true,
      features: {
        'color-adjust-property': false,
      },
    },
  },
}
