const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const generateHtmlPlugin = (title) => {
  return new htmlWebpackPlugin({
    title,
    filename: 'index.html',
    template: Path.resolve(__dirname, `../src/${title.toLowerCase()}.html`),
  });
}

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
  })
  return res;
}

const pages = populateHtmlPlugins(["index", "dashboard-1"]);

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }] }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, `../src/index.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'dashboard-1.html',
      template: Path.resolve(__dirname, `../src/dashboards/dashboard-1.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'dashboard-2.html',
      template: Path.resolve(__dirname, `../src/dashboards/dashboard-2.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'dashboard-3.html',
      template: Path.resolve(__dirname, `../src/dashboards/dashboard-3.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'dashboard-4.html',
      template: Path.resolve(__dirname, `../src/dashboards/dashboard-4.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'dashboard-5.html',
      template: Path.resolve(__dirname, `../src/dashboards/dashboard-5.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'chat-app.html',
      template: Path.resolve(__dirname, `../src/chat-app.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'contact.html',
      template: Path.resolve(__dirname, `../src/contact.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'calendar.html',
      template: Path.resolve(__dirname, `../src/calendar.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'file-manager.html',
      template: Path.resolve(__dirname, `../src/file-manager.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'component.html',
      template: Path.resolve(__dirname, `../src/component.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'button.html',
      template: Path.resolve(__dirname, `../src/components/button.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'kanban-board.html',
      template: Path.resolve(__dirname, `../src/kanban-board.html`),
    }),
    new htmlWebpackPlugin({
      filename: 'app.html',
      template: Path.resolve(__dirname, `../src/app.html`),
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
