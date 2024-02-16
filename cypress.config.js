const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        // specPattern: 'cypress/e2e/screenshotTest-Plugin.cy.js',
        setupNodeEvents(on) {
            addMatchImageSnapshotPlugin(on)
        },
    },
})