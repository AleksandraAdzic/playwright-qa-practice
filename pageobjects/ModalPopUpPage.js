class ModalPopUpPage {
  constructor(page) {
    this.page = page;
    this.popUpButton = page.getByRole("button", { name: " Launch Pop-Up " });
    this.labelCheckboxe = page.getByLabel(" Select me or not ");
    this.sendButton = page.getByRole("button", { name: "Send" });
    this.modalPopUp = page.locator("#exampleModal");
    this.titlePopUP = page.locator(".modal-header");
    this.labelText = page.locator(".form-check-label");
    this.resultBox = page.locator("#result");
  }

  async clickPopUpButton() {
    await this.popUpButton.click();
  }

  async clickLabelCheckboxe() {
    await this.labelCheckboxe.check();
  }

  async clickSendButton() {
    await this.sendButton.click();
  }

  async sendSelectedCheckbox() {
    await this.clickPopUpButton();
    await this.clickLabelCheckboxe();
    await this.clickSendButton();
  }

  async sendUncheckedCheckbox(){
    await this.clickPopUpButton();
    await this.clickSendButton();
  }
}

module.exports = { ModalPopUpPage };
