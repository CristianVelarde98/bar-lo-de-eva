const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // [name].[contenthash].js
  },
  target: 'node',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@cloudinary': path.resolve(__dirname, 'src/Cloudinary/'),
      '@controllers': path.resolve(__dirname, 'src/Controllers/'),
      '@database': path.resolve(__dirname, 'src/database/'),
      '@helpers': path.resolve(__dirname, 'src/Helpers/'),
      '@middleware': path.resolve(__dirname, 'src/Middleware/'),
      '@models': path.resolve(__dirname, 'src/Models/'),
      '@network': path.resolve(__dirname, 'src/Network/'),
      '@router': path.resolve(__dirname, 'src/routes/'),
      '@store': path.resolve(__dirname, 'src/Store/'),
    },
    extensions: ['.ts', '.js'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // Elimina comentarios
          },
          compress: {
            drop_console: true, // Elimina llamadas a console.log
            drop_debugger: true, // Elimina declaraciones debugger
            dead_code: true, // Elimina código inalcanzable
            warnings: false, // Deshabilita advertencias
            passes: 2, // Ejecuta la compresión en 2 pasadas para una mayor efectividad
          },
        },
        extractComments: false, // Evita extraer comentarios en archivos separados
      }),
    ],
    splitChunks: {
      chunks: 'all', // Dividir todos los tipos de chunks: async, sync y initial
      minSize: 50000, // Tamaño mínimo de los chunks en bytes (50KB)
      maxSize: 100000, // Tamaño máximo de los chunks en bytes (0 = sin límite)
      minChunks: 1, // Número mínimo de módulos compartidos antes de dividir
      maxAsyncRequests: 5, // Máximo número de peticiones asíncronas a la vez
      maxInitialRequests: 3, // Máximo número de peticiones iniciales a la vez
      automaticNameDelimiter: '-', // Separador de nombres de los chunks generados
      name: false, // Nombres automáticos basados en los módulos compartidos
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Agrupa módulos de node_modules
          name: 'vendor', // Nombre del chunk
          chunks: 'all',
        },
        default: {
          minChunks: 2, // Mínimo número de módulos compartidos antes de dividir
          priority: -20, // Prioridad menor que los chunks de vendor
          reuseExistingChunk: true, // Reutiliza chunks existentes si son idénticos
        },
      },
    },
  },
};
