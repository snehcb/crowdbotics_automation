const cypress = require("cypress");
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "bme5ek",
  reporter: 'cypress-mochawesome-reporter',
  //defaultCommandTimeout: 10000,
  env:
  {
      url:"https://crowdbotics-slack-dev.herokuapp.com",
      username : "sneh@crowdbotics.com",
      password : "devstringx@123",
      authenticationToken : "UGNYCSUVC4BCH7NL7G54KGBNN7GOLGJK"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/integration/pagetest/*.js'
  },
 
});
