class ConfirmationBoxPage {
    constructor(page) {
      this.page = page;
      this.clickButton = page.locator(".a-button");
    }
  
    async clickClickButton() {
      await this.clickButton.click();
    }
  }
  
  module.exports = { ConfirmationBoxPage };
  