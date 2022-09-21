const MainPage = require("../pageobjects/main.page");
const SignUpPage = require("../pageobjects/signUp.page");

describe("Check registration possibility through the 'Sign Up' button", () => {
  it("TC-003 Check registration with valid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.button__signUp.isDisplayed();
    await MainPage.button__signUp.click();

    await SignUpPage.check__signUpPageOpened();
    await SignUpPage.fill__іnputsFieldsWithValidCredentials();
    await SignUpPage.check__enteredValidData();
    await SignUpPage.click__signUpButton();
    await SignUpPage.check__redirectionToVerifyEmailPage();
    await SignUpPage.check__messageOnVerifyEmailPage();
  });
  xit("TC-004 Check registration with invalid credentials", async () => {
    await MainPage.open__siteMainPage();
    await MainPage.click__closeCookieModalWindowButton();
    await MainPage.button__signUp.toBeDisplayed();
    await MainPage.button__signUp.click();

    await SignUpPage.check__signUpPageOpened();
    await SignUpPage.fill__іnputsFieldsWithInvalidCredentials();
    await SignUpPage.check__enteredInvalidData();
    await SignUpPage.click__signUpButton();
    await SignUpPage.check__redirectionToVerifyEmailPage();
    await SignUpPage.check__messageOnVerifyEmailPage();
  });
});
