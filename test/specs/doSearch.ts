import Search from '../pages/Search';

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {

    await Search.clickSearchBar();
    
    await Search.performSearch("BrowserStack");
  });
});
