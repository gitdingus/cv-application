module.exports = {
  entry: './src/index.jsx',

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
};
