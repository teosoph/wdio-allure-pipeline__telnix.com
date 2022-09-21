const Page = require("../pageobjects/page");

class MainPage {
  get button__closeCookieModalWindow() {
    return $('[aria-label="close and deny"]');
  }
  get input__sighUp() {
    return $('input[name="email"]');
  }
  get buttom__submit() {
    return $('[type="submit"]');
  }

  async open__siteMainPage() {
    await Page.open();
  }

  async click__closeCookieModalWindowButton() {
    if (await this.button__closeCookieModalWindow.isDisplayed()) {
      await this.button__closeCookieModalWindow.click();
    }
  }
}

module.exports = new MainPage();
