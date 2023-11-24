const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 500,
  // viewportWidth: 500,
  defaultCommandTimeout: 3000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
