const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const nullloader = require.resolve('null-loader');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.resolve.alias['../Utilities/Platform'] =
    'react-native-web/dist/exports/Platform';
  config.resolve.alias["@stripe/stripe-react-native"]  = 'null-loader';
  return config;
};
