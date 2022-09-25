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

  //  TC-007
  // tabPosition = ["1", "3", "6", "8", "10"];
  tabPosition = ["1", "3"];
  // tabPosition = ["1"];

  tabs__headerMenu(i) {
    return $(`header div>ul>li:nth-child(${this.tabPosition[i]})>span`);
  }
  get tab__headerMenu() {
    // return $(`/html/body/div[1]/div[1]/header/div[2]/div/div[2]/ul/li[1]/div/div`);
    return $(`//header/div[2]/div/div[2]/ul/li[1]/div/div/div[2]`);
  }

  async mouseHoverOnHeaderMenuTabs() {
    for (let i = 0; i < this.tabPosition.length; i++) {
      await this.tabs__headerMenu(i).moveTo();
      await browser.pause(5000);

      // await this.tab__headerMenu.waitForExist({ timeout: 5000 });
      // await this.tab__headerMenu.takeElementScreenshot();

      await this.tab__headerMenu.saveScreenshot(`screenshots/screenshot_${this.tabPosition[i]}.png`);
    }
  }

  //  async makeHoveredHeaderMenuTabsScreenshot(this.tabPosition) {
  //     await this.tab__headerMenu.saveScreenshot(`my-screenshot_${this.tabPosition}.png`);

  //   }

  // TC-008
  // Support center
  get link__supportCenter() {
    return $(`audio+a[href*='support']`);
  }
  async click__supportCenterLink() {
    await this.link__supportCenter.moveTo();
    await this.link__supportCenter.click();
  }

  // TC-009
  // Expert Talk page

  get button__talkToExpert() {
    return $(`li>div>a[href*='/contact-us']`);
  }
  async click__talkToExpertButton() {
    await this.button__talkToExpert.click();
    await browser.pause(2000);
  }
}

module.exports = new MainPage();
