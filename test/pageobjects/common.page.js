class CommonPage {
  // get submitButtom() {
  //     return $('[type="submit"]');
  //   }

  //   async open__siteMainPage() {
  //     await browser.url("https://telnyx.com");
  //     await browser.setWindowSize(1920, 1080);
  //   }

  get input__email() {
    return $('[id="email"]');
  }
}

module.exports = new CommonPage();
