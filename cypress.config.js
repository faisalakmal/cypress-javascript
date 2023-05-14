const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportHeight: 500,
  // viewportWidth: 500,
  defaultCommandTimeout: 3000,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
