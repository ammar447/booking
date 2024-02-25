const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  } ,
  css: {
		loaderOptions: {
		  scss: {
			additionalData: `
			@import '@/css/Main.scss';
			@import '@/css/font.scss';
  
			`
		  }
		}
	  }
});
