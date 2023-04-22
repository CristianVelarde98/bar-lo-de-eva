module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          none: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@models': './src/models',
          '@config': './src/config',
          '@controllers': './src/controllers',
          '@services': './src/services',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@middlewares': './src/middlewares'
        }
      }
    ]
  ]
};
