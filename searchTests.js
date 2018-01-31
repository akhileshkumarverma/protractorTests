// import our PageOjbect as a Node.js module
var TestsConfig = require("./TestsConfig.js");
var config = new TestsConfig();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
var EC = protractor.ExpectedConditions;

describe('search level page test', function() {
    it('should load the search level', function() {
        // open the page        
        for(var key in config.searchPage) {
            browser.driver.get(config.searchPage[key])
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

describe('search level squiggly test', function() {
    it('should verify there are no squiggly in the source code', function() {
        // squiggly test
        config.squigglyTests();
    });
});

describe('search level SEO tests', function() {
    it('should verify SEO content populates meta tags', function() {
        // seo test
        config.seoTests('search');
    });
});

describe('search level search tests', function() {
    it('should verify search is working', function() {
        // search test
        for(var key in config.searchPage) {
            config.searchTests(config.searchPage[key], 'search');
        }
    });
});