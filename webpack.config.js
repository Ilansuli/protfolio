const path = require("path");

module.exports = {
  entry: "./src/index.js", // adjust the entry point based on your project structure
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      // add other rules as needed...
    ],
  },
  // add other webpack configuration options as needed...
};
