const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");
// Use the exposed exclusionList from expo/metro-config if available, or fallback to manual regex
const exclusionList = require("metro-config").exclusionList || ((patterns) => new RegExp(`(${patterns.map((p) => p.source).join("|")})`));

const config = getDefaultConfig(__dirname);

// 1. Watch the root project folder so we can import from ../src
config.watchFolders = [path.resolve(__dirname, "..")];

// 2. Ensure we resolve modules from the local node_modules first
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../node_modules"),
];

// 3. Force resolution of critical packages to the local node_modules
config.resolver.extraNodeModules = {
  react: path.resolve(__dirname, "node_modules/react"),
  "react-native": path.resolve(__dirname, "node_modules/react-native"),
  "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
  "@expo/vector-icons": path.resolve(__dirname, "node_modules/@expo/vector-icons"),
  "nativewind": path.resolve(__dirname, "node_modules/nativewind"),
  "react-native-css-interop": path.resolve(__dirname, "node_modules/react-native-css-interop"),
  "react-native-worklets": path.resolve(__dirname, "node_modules/react-native-worklets"),
  "clsx": path.resolve(__dirname, "node_modules/clsx"),
  "tailwind-merge": path.resolve(__dirname, "node_modules/tailwind-merge"),
  "class-variance-authority": path.resolve(__dirname, "node_modules/class-variance-authority"),
  "react-native-svg": path.resolve(__dirname, "node_modules/react-native-svg"),
  "lucide-react-native": path.resolve(__dirname, "node_modules/lucide-react-native"),
  "react-native-gifted-charts": path.resolve(__dirname, "node_modules/react-native-gifted-charts"),
  "expo-linear-gradient": path.resolve(__dirname, "node_modules/expo-linear-gradient"),
};

// 4. Block the bundler from seeing the parent's versions of these packages
// This prevents "duplicate React" issues
// We construct the exclusion list manually to avoid import issues
const blockList = [
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react-native")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react-dom")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "nativewind")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react-native-css-interop")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react-native-worklets")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "clsx")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "tailwind-merge")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "class-variance-authority")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react-native-svg")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "lucide-react-native")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "react-native-gifted-charts")}/.*`
  ),
  new RegExp(
    `${path.resolve(__dirname, "..", "node_modules", "expo-linear-gradient")}/.*`
  ),
];

config.resolver.blockList = exclusionList(blockList);

module.exports = withNativeWind(config, { input: "./global.css" });
