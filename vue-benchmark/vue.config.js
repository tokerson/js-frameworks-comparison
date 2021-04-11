const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// comment line 6 to disable analyzer
if (process.env.ANALYZE === 'true')
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      openAnalyzer: false,
      reportFilename: '../../benchmarks/bundle-sizes/vue.html',
    }),
  );

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins,
    optimization,
  },
};
