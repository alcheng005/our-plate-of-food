const path = require('path');

module.exports = {
  entry: {
    index: "./client/pages/homepage/index.js",
    room: "./client/pages/roompage/room.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  devServer: {
    publicPath: "/build/",
    // contentBase: "/client/",
    proxy: {
      '/': 'http://localhost:3000'
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
