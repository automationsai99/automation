const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
const { default: preprocessor } = require("cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    // env: {
    // URL: 'https://sweetshop.netlify.app/',
    // },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
  "cypress-cucumber-preprocessor": {
    nonGlobalStepDefinitions: true,
    videoCompression: false,
    video: false,
    videosFolder: false,
  },
});
