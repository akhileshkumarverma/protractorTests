exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    //specs: ['searchTests.js'],
    //specs: ['domainTests.js', 'regionTests.js', 'cityTests.js', 'indyTests.js'],
    //specs: ['domainTests.js', 'searchTests.js'],
    specs: ['domainTests.js','regionTests.js', 'cityTests.js', 'indyTests.js', 'searchTests.js'],

    getPageTimeout: 90000,

    onPrepare: function () {
        // If you are testing against a non-angular site 
        // set ignoreSynchronization setting to true
        browser.ignoreSynchronization = true;
    },

    // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=1280x1024" ]
    }
  },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};