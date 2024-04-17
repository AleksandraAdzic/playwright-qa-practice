class DisabledButtonPage {
  constructor(page) {
    this.page = page;
    this.clickButton = page.locator(".a-button");
    this.selectState = page.locator("#id_select_state");
  }

  async selectEnabledOption() {
    await this.selectState.selectOption("Enabled");
  }

  async selectDisabledOption() {
    await this.selectState.selectOption("Disabled");
  }
}

module.exports = { DisabledButtonPage };
