class SingleSelectPage {
  constructor(page) {
    this.page = page;
    this.textForLabel = page.locator("label");
    this.selectOption = page.locator("#id_choose_language");
    // this. = this.page.getByLabel("Choose language*");
  }

  async selectRandumOption() {
    const num = Math.floor(Math.random() * 5) + 1;
    await this.selectOption.selectOption({ index: num });
    const list = await this.page.getByRole("option").all();
    const text = await list[num].textContent();
    return text;
  }
}

module.exports = { SingleSelectPage };
