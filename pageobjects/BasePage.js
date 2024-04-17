class BasePage {
  constructor(page) {
    this.page = page;
    this.resultText = page.locator("#result-text");
    this.submitButton = page.locator("#submit-id-submit");
  }

  async toGo(URL) {
    await this.page.goto(URL);
  }

  async clickSubmitButton(locator) {
    await locator.click();
  }

  async clickSubmitButtonFromLocator() {
    await this.submitButton.click();
  }
}

module.exports = { BasePage };
