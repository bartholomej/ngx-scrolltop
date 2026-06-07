import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  public getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
