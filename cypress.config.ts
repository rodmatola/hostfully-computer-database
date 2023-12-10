import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io/computers',
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    scrollBehavior: 'center',
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
  },
});
