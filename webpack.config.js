module.exports = {
  entry: ["./client/index.js"],
  //comment this out later once we set up src
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
