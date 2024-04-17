class SingleChekboxPage {
  constructor(page) {
    this.page = page;
    this.textLabel = page.locator(".form-check-label");
    this.inputToSelect = page.locator("#id_checkbox_0");
    this.submitButton = page.locator("#submit-id-submit");
    this.allCheckboxs = page.locator("input[type=checkbox]");
  }

  async clickSelect() {
    await this.inputToSelect.check();
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}

module.exports = { SingleChekboxPage };
