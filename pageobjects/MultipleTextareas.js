const { faker } = require("@faker-js/faker");
const { text } = require("stream/consumers");

class MultipleTextareas {
  constructor(page) {
    this.page = page;
    this.labelForText = page.locator("label");
    this.firstTextarea = page.locator("#id_first_chapter");
    this.secondTextarea = page.locator("#id_second_chapter");
    this.thirdTextarea = page.locator("#id_third_chapter");
  }

  async makeFakeText() {
    const text = faker.lorem.sentence();
    return text;
  }

  async enterTextInTextArea(someLocator, text) {
    await someLocator.fill(text);
  }

  async enterTextInFirstTextarea() {
    const text = await this.makeFakeText();
    await this.enterTextInTextArea(this.firstTextarea, text);
    return text;
  }

  async enterTextInSecondTextarea() {
    const text = await this.makeFakeText();
    await this.enterTextInTextArea(this.secondTextarea, text);
    return text;
  }

  async enterTextInThirdTextarea() {
    const text = await this.makeFakeText();
    await this.enterTextInTextArea(this.thirdTextarea, text);
    return text;
  }

  async fillAllTextareas() {
    const text1 = await this.enterTextInFirstTextarea();
    const text2 = await this.enterTextInSecondTextarea();
    const text3 = await this.enterTextInThirdTextarea();
    const text = text1 + text2 + text3;
    return text;
  }

  async fillTwoTextares() {
    const text1 = await this.enterTextInFirstTextarea();
    const text2 = await this.enterTextInSecondTextarea();
    const text = text1 + text2;
    return text;
  }
}

module.exports = { MultipleTextareas };
