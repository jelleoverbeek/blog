// postcss.config.js
module.exports = {
  map: true,
  plugins: {
    "postcss-preset-env": {
      stage: 0
    },
    "autoprefixer": {}
  }
};
