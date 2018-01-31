// import our PageOjbect as a Node.js module
var TestsConfig = require("./TestsConfig.js");
var config = new TestsConfig();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000; 
var EC = protractor.ExpectedConditions;

describe('domain level page test', function() {
    it('should load the domain level', function() {
        // open the page
        for(var key in config.domainPage) {
            browser.driver.get(config.domainPage[key]);
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

describe('domain level squiggly test', function() {
    it('should verify there are no squiggly in the source code', function() {
        // squiggly test
        config.squigglyTests();
    });
});

describe('domain level SEO tests', function() {
    it('should verify SEO content populates meta tags', function() {
        // seo test
        config.seoTests('domain');
    });
});

describe('domain level search tests', function() {
    it('should verify search is working', function() {
        // search test
        for(var key in config.domainPage) {
            config.searchTests(config.domainPage[key], 'domain');
        }
    });
});