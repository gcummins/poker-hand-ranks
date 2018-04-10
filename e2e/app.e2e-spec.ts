import { AppPage } from './app.po';

describe('poker-hand-ranks App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Rank a Hold\'em Hand');
  });
});
