import { ExampleAppV2Page } from './app.po';

describe('example-app-v2 App', () => {
  let page: ExampleAppV2Page;

  beforeEach(() => {
    page = new ExampleAppV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
