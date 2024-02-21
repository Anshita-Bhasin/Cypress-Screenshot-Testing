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

```
Implementation

 
 const { addMatchImageSnapshotPlugin } = require ('@simonsmith/cypress-image-snapshot/plugin')
 const { defineConfig } = require ('cypress')
 module.exports= defineConfig({
  e2e: {
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)
    },   },  })

```


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
```




## How to use perform screenshot testing on Cypress Cloud Grid

Using the LambdaTest platform, you can perform regression testing with just one click and effortlessly identify Visual UI Regression bugs through the assistance of Smart Testing. Below is the step-by-step instructions on how to execute Visual Regression tests on Cypress Cloud Platform.

Step 1: Install LambdaTest CLI.
Install LambdaTest CLI using npm, use the below command: 
```
<npm install lambdatest-cypress-cli>
```

Step 2: Set up the config.
Once the LambdaTest CLI is installed, now we need to set up the configuration using the below command: 
```
<lambdatest-cypress init>

```
After running the command, there will be a file created in your project named “lambdatest-config.json”. We need to set up the configuration in order to run our test case on different browsers on LambdaTest.

For Cypress version 10 and above, you can follow the below code to set up lambdatest-config.json.

```

{
   "lambdatest_auth": {
      "username": "user.name",
      "access_key": "access.key"
   },
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      },
      {
         "browser": "Firefox",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      }
   ],
   "run_settings": {
     "cypress_config_file": "cypress.json",
     "reporter_config_file": "base_reporter_config.json",
     "build_name": "build-name",
     "parallels": 1,
     "specs": "./cypress/e2e/*/*.cy.js",
     "ignore_files": "",
     "network": false,
     "headless": false,
     "npm_dependencies": {
       "cypress": "13.5.0"
     }
   },

    "smart_ui": {
      "project": "Cypress Screenshot Testing",
      "build": "Screenshot Test",
      "baseline": false
    },

   "tunnel_settings": {
      "tunnel": false,
      "tunnel_name": null
   }
}

```

Step 3: Execute Test Case
Once the config is done, now you can execute the Cypress test case on the LambdaTest cloud Platform using the below command  <lambdatest-cypress run>



