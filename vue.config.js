module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/global/fonts";
          @import "~@/assets/scss/global/vars";
        `,
      },
    },
  },
  lintOnSave: "warning",
};
