import { GeotagAppPage } from './app.po';

describe('geotag-app App', () => {
  let page: GeotagAppPage;

  beforeEach(() => {
    page = new GeotagAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
