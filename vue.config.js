module.exports = {
  css: {
    sourceMap: true, //  TODO: ??? 뭘까 얘는 ???
    loaderOptions: {
      scss: {
        additionalData: `
          @import "src/assets/_mixins.scss";
          @import "src/assets/_variables.scss";
          @import "src/assets/_mediaQueries.scss";
          @import "src/assets/_svg.scss";
          @import "src/assets/_common.scss";
        `,
      },
    },
  },
};
