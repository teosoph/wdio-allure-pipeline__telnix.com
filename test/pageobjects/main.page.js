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
  // TC-005
  get list__footerProductMenu() {
    return $(`(//p[text()='Products']/following-sibling::ul//span//span)`);
  }

  item__footerMenuList(i) {
    return $(`(//p[text()='Products']/following-sibling::ul//span//span)[${i + 1}]`);
  }

  items__footerProductsMenu = ["Elastic SIP Trunking", "Call Control - Voice API", "Programmable SMS", "WhatsApp API", "Secure Faxing", "Wireless - Cellular IoT", "Number Lookup", "Global Numbers", "Verify API", "See all Products"];

  async checkFooterProductsMenuItemsName() {
    await this.list__footerProductMenu.scrollIntoView();
    for (let i = 0; i < this.items__footerProductsMenu.length; i++) {
      expect(await this.item__footerMenuList(i)).toHaveTextContaining(`${this.items__footerProductsMenu[i]}`);
    }
  }

  // TC-006
  async click__OnSignUpButton() {
    await this.button__signUp.click();
  }
}

module.exports = new MainPage();
