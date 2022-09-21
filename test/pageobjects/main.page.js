const Page = require("../pageobjects/page");

class MainPage {
  // Open main page
  async open__siteMainPage() {
    await Page.open();
  }

  // Cookie modal window
  get button__closeCookieModalWindow() {
    return $('[aria-label="close and deny"]');
  }
  async click__closeCookieModalWindowButton() {
    if (await this.button__closeCookieModalWindow.isDisplayed()) {
      await this.button__closeCookieModalWindow.click();
    }
  }

  // TC-001, TC-002
  get input__sighUp() {
    return $('input[name="email"]');
  }
  get buttom__submit() {
    return $('[type="submit"]');
  }

  // TC-003, TC-004
  get button__signUp() {
    return $('li div a[href="/sign-up"]');
  }
}

module.exports = new MainPage();
