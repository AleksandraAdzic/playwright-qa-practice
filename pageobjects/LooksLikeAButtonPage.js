class LooksLikeAButtonPage {
  constructor(page) {
    this.page = page;
    this.clickButton = page.locator(".a-button");
  }
}

module.exports = { LooksLikeAButtonPage };
