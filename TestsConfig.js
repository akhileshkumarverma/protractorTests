var TestsConfig = function () {
    var gmap = $('.gm-style');
    var searchInput = $('.search-input');
    var searchButton = $('.search-submit');
    var searchTitle = $('.map-list-header');
    var searchNearBy = $('.search-nearby');
  
    this.domainPage = {
        'key_here' : 'url_here'
    };
    this.regionPage = {
        'key_here' : 'url_here'
    };

    this.cityPage = {
        'key_here' : 'url_here'
    };

    this.indyPage = {
        'key_here' : 'url_here'
    };

    this.searchPage = {
        'key_here' : 'url_here'
    };

    this.stateSearch = 'Texas';
    this.citySearch = 'Orlando';
    this.zipSearch = '10017';
    this.noResultSearch = 'notrealsearch';

    this.expectedState = 'tx';
    this.expectedCity = 'Orlando';
    this.expectedZip = '10017';
    this.expectedNoResult = 'There are no locations in your search area. Please try a different search area.';

    this.domainPageTitle = '';
    this.regionPageTitle = '';
    this.cityPageTitle = '';
    this.indyPageTitle = '';
    this.searchPageTitle = '';
    this.visibilityInput = '.search-input';

    this.squigglyTests = function () {
        var squigglyTests = element(by.xpath('/html'));
        expect(squigglyTests.getAttribute('innerHTML')).not.toContain('~');
    }

    //test meta seo items
    this.seoTests = function (level) {
        var EC = protractor.ExpectedConditions;
        //description meta tag is present and content present
        expect($('meta[name=description]').getAttribute('content') != '').toBe(true);

        //keywords meta tag is present and content present
        expect($('meta[name=keywords]').getAttribute('content') != '').toBe(true);

        //viewport meta tag is present and content present
        expect($('meta[name=viewport]').getAttribute('content') != '').toBe(true);

        //language meta tag is present and content present
        expect($('meta[name=language]').getAttribute('content') != '').toBe(true);

        //robots meta tag is present and content present
        expect($('meta[name=robots]').getAttribute('content') != '').toBe(true);
        
        //ms bing meta tag is present and content present
        if (level == ('domain')) {
            (expect($('meta[name="msvalidate.01"]').isPresent()).toBe(true))
            expect($('meta[name="msvalidate.01"]').getAttribute('content') != '').toBe(true);
        }
        
        //Google site verification meta tag is present and content present
        if (level == ('domain')) {
            (expect($('meta[name=google-site-verification]').isPresent()).toBe(true))
            expect($('meta[name=google-site-verification]').getAttribute('content') != '').toBe(true);
        }

        ms bing meta tag is present and content present
        if level = ('domain')
            (expect($('meta[name="msvalidate.01"]').isPresent()).toBe(true)) {
            expect($('meta[name="msvalidate.01"]').getAttribute('content') != '').toBe(true);
        }

        Google site verification meta tag is present and content present
        if (expect($('meta[name=google-site-verification]').isPresent()).toBe(true)) {
            expect($('meta[name=google-site-verification]').getAttribute('content') != '').toBe(true);
        }

        //X-UA compatible meta tag is present and content present
        expect($('meta[http-equiv=X-UA-Compatible]').getAttribute('content') != '').toBe(true);

        //Content-Type compatible meta tag is present and content present
        expect($('meta[http-equiv=Content-Type]').getAttribute('content') != '').toBe(true);

        //content-language meta tag is present and content present
        expect($('meta[http-equiv=content-language]').getAttribute('content') != '').toBe(true);

        //desktop canonical verification
        expect($('link[rel=canonical]').isPresent()).toBe(true);
        expect($('link[rel=canonical]').getAttribute('content') != '').toBe(true);

        //Use this swtich block if the title test has a location specific title requirement.
        switch (level) {
            case 'domain':

                break;

            case 'region':

                break;

            case 'city':

                break;

            case 'indy':

                break;

            case 'search':

                break;

            default:
                // statements_def
                break;
        }

    }

    //search test definitions
    this.setSearch = function (search) {
        searchInput.sendKeys(search);
    }
    this.submitSearch = function () {
        searchButton.click();
    }

    this.getSearchTitle = function () {
        return searchTitle.getText();
    }

    this.searchNearByMe = function () {
        searchNearBy.click();
    }

    // search function 
    this.searchTests = function (pageURL, level) {
        var EC = protractor.ExpectedConditions;
        var waiting = true;

        while(waiting) {
            if ((level != 'search') || browser.driver.wait(EC.urlContains('lat'))) {
                waiting = false;

                // expect valid results when submitting state search
                browser.driver.get(pageURL);
                this.setSearch(this.stateSearch);
                this.submitSearch();
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                //expect(this.getSearchTitle()).toContain(this.stateSearch);
                browser.driver.wait(EC.urlContains(this.expectedState));
                expect(browser.driver.getCurrentUrl()).toContain(this.expectedState, level + ': your search does not contain ' + this.expectedState);

                // expect valid results when submitting city search
                browser.driver.get(pageURL);
                this.setSearch(this.citySearch);
                this.submitSearch();
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                //expect(this.getSearchTitle()).toContain(this.expectedCity);
                expect(browser.driver.getCurrentUrl()).toContain(this.expectedCity, level + ': your search does not contain ' + this.expectedCity);

                // expect valid results when submitting zip search
                browser.driver.get(pageURL);
                this.setSearch(this.zipSearch);
                this.submitSearch();
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                //expect(this.getSearchTitle()).toContain(this.expectedZip);
                expect(browser.driver.getCurrentUrl()).toContain(this.expectedZip, level + ': your search does not contain ' + this.expectedZip);

                // expect to be informed there is no location near my search location.
                browser.driver.get(pageURL);
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                this.setSearch(this.noResultSearch);
                this.submitSearch();
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                browser.driver.wait(EC.visibilityOf(element(by.xpath('.xpath_class_here'))), 30000);
                expect($('.no-results').getText()).toContain(this.expectedNoResult, 30000, level + ': does not contain message');

                // verify search nearby and expect lat & lng to geolocate.
                browser.driver.get(pageURL);
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                this.searchNearByMe();
                browser.driver.wait(EC.visibilityOf($(this.visibilityInput)), 30000);
                //browser.driver.wait(EC.urlContains('lat'), 30000, 'does not contain lat');
                //expect(browser.driver.getCurrentUrl()).toContain('lat');
                //expect(browser.driver.getCurrentUrl()).toContain('lng');
                console.log();
            }else{
                //nothing
            }
        }
    }
};
// this exposes our PageObject as a module in Node.js
module.exports = TestsConfig;
