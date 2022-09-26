const СommonPage = require("../pageobjects/common.page");

class ExpertPage {
  get title__expertTalkPage() {
    return $(`header>h1>span`);
  }
  async check__expertTalkPageTitle() {
    await expect(this.title__expertTalkPage).toHaveTextContaining("Talk to an expert");
  }

  get dropMenu__chooseReasonContact() {
    return $(`[id="Reason_for_Contact__c"]`);
  }
  async mark__chooseReasonContactDropMenu() {
    await this.dropMenu__chooseReasonContact.selectByAttribute("value", "Sales-Inquiry");
  }

  get input__firstName() {
    return $(`[id="FirstName"]`);
  }
  get input__lastName() {
    return $(`[id="LastName"]`);
  }
  get input__email() {
    return $(`[id="Email"]`);
  }
  get input__phoneNumberExtension() {
    return $(`[id="Phone_Number_Extension__c"]`);
  }
  get input__phoneNumberBase() {
    return $(`[id="Phone_Number_Base__c"]`);
  }
  get input__website() {
    return $(`[id="Website"]`);
  }
  get input__useCaseForm() {
    return $(`[id="Use_Case_Form__c"]`);
  }
  get input__formAdditionalInformation() {
    return $(`[id="Form_Additional_Information__c"]`);
  }
  // Fill valid data
  async fill__validDataToInputFields() {
    await this.input__firstName.setValue(СommonPage.validUserData["firstName"]);
    await this.input__lastName.setValue(CommonPage.validUserData["lastName"]);
    await this.input__email.setValue(CommonPage.validUserData["testEmail"]);
    await this.input__phoneNumberExtension.select("+380");
    await this.input__phoneNumberBase.setValue(CommonPage.validUserData["phoneNumber"]);
    await this.input__website.setValue(CommonPage.validUserData["companyWebsite"]);
    await this.input__useCaseForm.select("Video");
    await this.input__formAdditionalInformation.setValue(CommonPage.generateRandomData());
  }
  // Fill invalid data
  async fill__invalidDataToInputFields() {
    await this.input__firstName.setValue(СommonPage.invalidUserData["firstName"]);
    await this.input__lastName.setValue(CommonPage.invalidUserData["lastName"]);
    await this.input__email.setValue(CommonPage.invalidUserData["testEmail"]);
    await this.input__phoneNumberExtension.select("+380");
    await this.input__phoneNumberBase.setValue(CommonPage.invalidUserData["phoneNumber"]);
    await this.input__website.setValue(CommonPage.invalidUserData["companyWebsite"]);
    await this.input__useCaseForm.select("Video");
    await this.input__formAdditionalInformation.setValue(CommonPage.generateRandomData());
  }

  get checkBox__subscription() {
    return $(`[name="Subscription_Opt_In__c"]`);
  }
  async mark__subscriptionCheckBox() {
    await this.checkBox__subscription.click();
  }

  get button__onSubmit() {
    return $(`[setValue="submit"]`);
  }
  async click__submitButton() {
    await this.button__onSubmit.click();
  }

  get data__valid() {
    return $(`main>div>h1`);
  }
  async check__validDataEntering() {
    await expect(this.data__valid).toHaveTextContaining("Thanks for Reaching Out!");
  }

  get data__invalid() {
    return $(`[id="ValidMsgEmail"]`);
  }
  async check__invalidDataEntering() {
    await expect(this.data__valid).toHaveTextContaining("Must be valid email.");
  }
}

module.exports = new ExpertPage();
