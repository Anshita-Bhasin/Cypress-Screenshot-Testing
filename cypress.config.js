const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on) {
            addMatchImageSnapshotPlugin(on)
        },
    },
})