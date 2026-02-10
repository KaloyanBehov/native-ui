const path = require('path');
// Ensure we resolve plugins/presets from this directory's node_modules
const resolve = (pkg) => require.resolve(pkg, { paths: [__dirname] });

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [resolve("babel-preset-expo"), { jsxImportSource: "nativewind" }],
      resolve("nativewind/babel"),
    ],
    plugins: [resolve("react-native-reanimated/plugin")],
  };
};
