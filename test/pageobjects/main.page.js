class MainPage extends Page {
  get closeCookieModalWindowButton() {
    return $('[aria-label="close and deny"]');
  }

  async open__siteMainPage() {
    await browser.url("https://telnyx.com");
    await browser.setWindowSize(1920, 1080);
  }

  async click__closeCookieModalWindowButton() {
    if (await this.closeCookieModalWindowButton.isDisplayed()) {
      await this.closeCookieModalWindowButton.click();
    }
  }
}

export default new MainPage();
