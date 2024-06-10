/// <reference types="cypress" />
const { defineConfig } = require('cypress');
const { plugin: replayPlugin, wrapOn } = require('@replayio/cypress');
const cypressSplit = require('cypress-split');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3003',
    fixturesFolder: false,
    setupNodeEvents(cyOn, config) {
      const on = wrapOn(cyOn);
      cypressSplit(on, config);
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
      });
      return config;
    },
  },
});
