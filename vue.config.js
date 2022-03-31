// const webpack = require("webpack");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/main.scss";`,
      },
    },
  },
};
