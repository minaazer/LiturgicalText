import { ConfigContext } from '@expo/config';

export default ({ config }) => ({
  name: "LiturgicalBooks",
  slug: "LiturgicalBooks",
  version: "1.0.0",
  orientation: "landscape",
  icon: "./assets/cymbals.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.minaazer.LiturgicalBooks",
    permissions: ["INTERNET", "ACCESS_NETWORK_STATE", "ACCESS_WIFI_STATE"],
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "2c2c0d93-d8b8-4188-864e-b797d38638fb",
    },
  },
});
