const { startDevServer } = require("@cypress/webpack-dev-server");
const findReactScriptsWebpackConfig = require("@cypress/react/plugins/react-scripts/findReactScriptsWebpackConfig");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const webpackConfig = findReactScriptsWebpackConfig(config);

  const rules = webpackConfig.module.rules.find((rule) => !!rule.oneOf).oneOf;
  const babelRule = rules.find((rule) => /babel-loader/.test(rule.loader));
  babelRule.options.plugins.push(require.resolve("babel-plugin-istanbul"));

  on("dev-server:start", async (options) =>
    startDevServer({ options, webpackConfig })
  );

  return config;
};
