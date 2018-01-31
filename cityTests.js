// import our PageOjbect as a Node.js module
var TestsConfig = require("./TestsConfig.js");
var config = new TestsConfig();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
 
describe('city level page test', function() {
    it('should load the city level', function() {
        // open the page
        for(var key in config.cityPage) {
            browser.driver.get(config.cityPage[key]);

            switch(key) {
                case 'burbank':

                    break;
                case 'dallas':

                    break;
                default:
                    break;
            }
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

describe('city level squiggly test', function() {
    it('should verify there are no squiggly in the source code', function() {
        // squiggly test
        config.squigglyTests();
    });
});

describe('city level SEO tests', function() {
    it('should verify SEO content populates meta tags', function() {
        // seo test
        config.seoTests('city');
    });
});

describe('city level search tests', function() {
    it('should verify search is working', function() {        
        // search test
        for(var key in config.cityPage) {
            config.searchTests(config.cityPage[key], 'city');
        }
    });
});