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
  publicPath: process.env.NODE_ENV === "production" ? "/student-designer-portfolio/" : "/",
};
