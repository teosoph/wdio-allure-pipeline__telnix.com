import MainPage from "../pageobjects/main.page";

describe("Check registration possibility through `Try for free ->` field", () => {
  it("Check registration possibility with valid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
  });
});
