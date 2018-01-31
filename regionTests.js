// import our PageOjbect as a Node.js module
var TestsConfig = require("./TestsConfig.js");
var config = new TestsConfig();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
var EC = protractor.ExpectedConditions; 

describe('region level page test', function() {
    it('should load the region level', function() {
        // open the page
        for(var key in config.regionPage) {
            browser.driver.get(config.regionPage[key]);
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

describe('region level squiggly test', function() {
    it('should verify there are no squiggly in the source code', function() {
        // squiggly test
        config.squigglyTests();
    });
});

describe('region level SEO tests', function() {
    it('should verify SEO content populates meta tags', function() {
        // seo test
        config.seoTests('region');
    });
});

describe('region level search tests', function() {
    it('should verify search is working', function() {
        // search test
        for(var key in config.regionPage) {
            config.searchTests(config.regionPage[key], 'region');
        }
    });
});