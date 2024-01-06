# Cypress-Screenshot-Testing
Cypress-Screenshot-Testing

# How to Perform Cypress Screenshot Testing
Cypress is one of the most popular tools in the market today, thanks to its remarkable capabilities for testing E2E and Components. Among the many valuable features it offers, one particularly noteworthy function is its ability to conduct screenshot testing.

By default, Cypress automatically captures screenshots for failed test cases during the run mode. However, what makes it even more impressive is its flexibility. You can easily customize it to capture screenshots for specific actions or for every step in your test execution.


# How can we do Screenshot testing in Cypress?
To perform screenshot testing in Cypress, the process is pretty straight forward.By using the following syntax, you can easily capture screenshots of the application under test and incorporate this powerful feature into your testing strategy:



![image](https://github.com/Anshita-Bhasin/Cypress-Screenshot-Testing/assets/10338077/f726405d-ea25-4d55-a438-177c708fd1c5)


# Mastering Screenshot Testing with Cypress-Image-Snapshot Plugin

To ensure your website looks perfect, the cypress-image-screenshot Plugin is an excellent choice. It is free to use (MIT License) plugin that has more than nine releases at the moment.This plugin lets you capture specific snapshots during tests and compare them to reference screenshots, pinpointing differences in DOM, layout, or visual properties.

## Step1: Plugin Installation
Go to terminal and install the plugin by using the command : npm install --save-dev @simonsmith/cypress-image-snapshot

## Step2 : Import and initialize the Cypress image snapshot plugin
For Cypress version 10 and above: Go to cypress.config.js and add the below code:

`````
Implementation

 
 const { addMatchImageSnapshotPlugin } = require ('@simonsmith/cypress-image-snapshot/plugin')
 const { defineConfig } = require ('cypress')
 module.exports= defineConfig({
  e2e: {
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)
    },   },  })


## Step3 : Import and add Cypress image command:
For Cypress version 10 and above: Go to cypress/support/commands.js and add the below code:

Implementation

 ```
 import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command'


 addMatchImageSnapshotCommand()
// can also add any default options to be used
// by all instances of `matchImageSnapshot`
 addMatchImageSnapshotCommand({
    failureThreshold: 0.2,
})


