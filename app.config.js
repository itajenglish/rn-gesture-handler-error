export default {
  name: 'Test App',
  orientation: 'portrait',
  scheme: 'listedb',
  version: '1.0.0',
  assetBundlePatterns: ['**/*'],
  jsEngine: 'jsc',
  android: {
    versionCode: 1,
    package: 'com.test.app',
  },
  ios: {
    buildNumber: '1',
    bundleIdentifier: 'com.test.app',
  },
  plugins: [
    'newrelic-react-native-agent',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
          deploymentTarget: '13.0',
        },
        android: {
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          buildToolsVersion: '33.0.0',
        },
      },
    ],
    [
      'config-plugin-react-native-intercom',
      {
        iosApiKey: '123',
        androidApiKey: '123',
        appId: '123',
      },
    ],
    [
      '@config-plugins/react-native-branch',
      {
        apiKey: '123',
        iosAppDomain: '123',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow access to your photos to be able to upload media stored in your library.',
        cameraPermission: 'Allow access to your camera to be able to upload media you take.',
      },
    ],
  ],
};
