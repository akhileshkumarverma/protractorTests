// import our PageOjbect as a Node.js module
var TestsConfig = require("./TestsConfig.js");
var config = new TestsConfig();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
var EC = protractor.ExpectedConditions;

describe('indy level page test', function() {
    it('should load the indy level', function() {
        // open the page
        for(var key in config.indyPage) {
            browser.driver.get(config.indyPage[key]);
        }
    });
});

describe('google map tests', function() {
    it('should verify the google map is loading on the page level', function() {
        //expect map to be loaded
        this.getGmap = function() {
            return gmap;
        }
    });
});

describe('indy level squiggly test', function() {
    it('should verify there are no squiggly in the source code', function() {
        // squiggly test
        config.squigglyTests();
    });
});

describe('indy level SEO tests', function() {
    it('should verify SEO content populates meta tags', function() {
        // seo test
        config.seoTests('indy');
    });
});

describe('indy level search tests', function() {
    it('should verify search is working', function() {
        // search test
        for(var key in config.indyPage) {
            config.searchTests(config.indyPage[key], 'indy');
        }
    });
});