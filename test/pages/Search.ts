const expect = require("chai");

class Search {
    constructor() {
        
    }

    /**
     * Click the Search bar
     */
    async clickSearchBar () {
        this.searchSelector.waitForDisplayed({ timeout: 30000 });
        this.searchSelector.click();
    }

    /**
     * Carry out a Search
     * @param searchText
     */
    async performSearch (searchText: string) {
        await this.crossPlatformSelector.waitForDisplayed({ timeout: 30000 });
        await this.crossPlatformSelector.setValue(searchText);
        await browser.pause(5000);
    }

    // Various getter methods for all of the selectors that will be used in this Object
    get crossPlatformSelector () { 
        const selectorAndroid = 'new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")'
        const selectorIOS = 'UIATarget.localTarget().frontMostApp().mainWindow().buttons()[0]'
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selectorType}=${selector}`)  
    };

    get searchSelector () { return $(`~Search Wikipedia`) };

    get insertTextSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }
}

export default new Search;