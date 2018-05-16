const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = ({ mode }) => {
  const DEV = mode === "development";

  return {
    entry: [DEV && "webpack/hot/poll?100", "./src/index.ts"].filter(Boolean),
    watch: DEV,
    target: "node",
    externals: [
      nodeExternals({
        whitelist: ["webpack/hot/poll?100"]
      })
    ],
    module: {
      rules: [
        {
          test: /.ts?$/,
          use: "ts-loader"
        }
      ]
    },
    mode: mode,
    resolve: {
      extensions: [".ts", ".js"]
    },
    plugins: [
      DEV && new webpack.HotModuleReplacementPlugin(),
      DEV &&
        new StartServerPlugin({
          name: "server.js"
        }),
      DEV && new Dotenv()
    ].filter(Boolean),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "server.js"
    }
  };
};
