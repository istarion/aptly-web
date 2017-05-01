import { AptlyWebPage } from './app.po';

describe('aptly-web App', () => {
  let page: AptlyWebPage;

  beforeEach(() => {
    page = new AptlyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
