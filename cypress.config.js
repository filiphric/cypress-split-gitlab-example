/// <reference types="cypress" />
import { defineConfig } from 'cypress';
import { plugin as replayPlugin, wrapOn } from '@replayio/cypress';
import 'cypress-split'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3003',
    fixturesFolder: false,
    supportFile: 'cypress/support.ts',
    setupNodeEvents(on, config) {
      const on = wrapOn(cyOn)
      cypressSplit(on, config)
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
      });
      return config;
    },
  },
});
