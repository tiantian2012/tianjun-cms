import { TianjunCmsPage } from './app.po';

describe('tianjun-cms App', () => {
  let page: TianjunCmsPage;

  beforeEach(() => {
    page = new TianjunCmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
