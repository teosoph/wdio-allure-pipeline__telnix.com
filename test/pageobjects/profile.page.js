const CommonPage = require("../pageobjects/common.page");

class ProfilePage {
  // TC-016/TC-017/TC-018
  get icon__profile() {
    return $("(//h1/following-sibling::div/div/div/div)[3]");
  }
  get title__profileDropMenu() {
    return $("//div[@class='text-truncate']");
  }
  async check__successfulLogin() {
    await this.icon__profile.moveTo();
    await browser.pause(2000);
    await this.title__profileDropMenu.isDisplayed();
    await expect(this.title__profileDropMenu).toHaveText(CommonPage.loginUserData["workEmail"]);
  }
  get button__signOut() {
    return $('//button[contains(text(), "Sign out")]');
  }
  async click__signOutButton() {
    await this.icon__profile.moveTo();
    await browser.pause(2000);
    await this.button__signOut.click();
  }
}

module.exports = new ProfilePage();
