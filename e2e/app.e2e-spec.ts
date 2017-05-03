import { Angular2BeginnerPage } from './app.po';

describe('angular2-beginner App', () => {
  let page: Angular2BeginnerPage;

  beforeEach(() => {
    page = new Angular2BeginnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
