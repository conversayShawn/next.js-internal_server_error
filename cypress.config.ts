import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.FEATURE_FLAGS = process.env.FEATURE_FLAGS
      return config
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
