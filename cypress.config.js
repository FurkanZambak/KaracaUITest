const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = 
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = 
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      //config.baseUrl = 'https://www.karaca.com'
      config.video = false
      config.watchForFileChanges = false
      config.viewportHeight = 1080
      config.viewportWidth = 1920
      config.defaultCommandTimeout = 6000

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
  },
});
