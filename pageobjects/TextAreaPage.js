const { faker } = require("@faker-js/faker");

class TextAreaPage {
  constructor(page) {
    this.page = page;
    this.textForLabel = page.locator("label");
    this.textArea = page.locator("#id_text_area");
    this.submitButton = page.locator("#submit-id-submit");
  }

  async fakeText() {
    const text = faker.lorem.sentences(2);
    return text;
  }

  async enterTextInTextArea(text) {
    await this.textArea.fill(text);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async fillTextAndPressButton() {
    const text = await this.fakeText();
    await this.enterTextInTextArea(text);
    await this.clickSubmitButton();
    return text;
  }
}

module.exports = { TextAreaPage };
