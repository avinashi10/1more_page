const path = require('path');
const Dotenv = require('dotenv-webpack'); // eslint-disable-line

// Determine the current environment (default to development)
const currentEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: currentEnv,
  entry: path.join(__dirname, '/client/source/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv({
      // Load .env.development or .env.production based on the environment
      path: path.resolve(__dirname, `.env.${currentEnv}`),
    }),
  ],
  devtool: currentEnv === 'development' ? 'source-map' : false, // creates a file to relate compiled code to source code for debugging use
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx', '.png', '.jpg'],
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
