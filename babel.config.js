module.exports = {
  compact: true,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  // These seem to be necessary for useBuiltIns: 'usage' to work properly
  sourceType: 'unambiguous',
  ignore: [/[/\\]core-js/, /@babel[/\\]runtime/],

  plugins: [
    '@babel/plugin-transform-runtime',
  ],
}

