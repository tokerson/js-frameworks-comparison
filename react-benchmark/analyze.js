// https://medium.com/@romanonthego/webpack-bundle-analyzer-for-create-react-app-9aebb0d01084
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpackConfigProd = require('react-scripts/config/webpack.config')(
  'production',
);

// pushing BundleAnalyzerPlugin to plugins array
webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    defaultSizes: 'gzip',
    openAnalyzer: false,
    reportFilename: '../../benchmarks/bundle-sizes/react.html',
  }),
);

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfigProd, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
});
