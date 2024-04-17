const { BasePage } = require("./BasePage");
const { TextInputFieldPage } = require("./TextInputFieldPage");
const { SimpleButtonPage } = require("./SimpleButtonPage");
const { LooksLikeAButtonPage } = require("./LooksLikeAButtonPage");
const { DisabledButtonPage } = require("./DisabledButtonPage");
const { SingleChekboxPage } = require("./SingleChekboxPage");
const { CheckboxsPage } = require("./CheckboxesPage");
const { SingleSelectPage } = require("./SingleSelectPage");
const { MultipleSelectPage } = require("./MultipleSelectPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.textInputFieldPage = new TextInputFieldPage(page);
    this.simpleButtonPage = new SimpleButtonPage(page);
    this.looksLikeAButtonPage = new LooksLikeAButtonPage(page);
    this.disabledButtonPage = new DisabledButtonPage(page);
    this.singleCheckBoxPage = new SingleChekboxPage(page);
    this.checkboxsPage = new CheckboxsPage(page);
    this.singleSelectPage = new SingleSelectPage(page);
    this.multipleSelectPage = new MultipleSelectPage(page);
  }

  getMultipleSelectPage() {
    return this.multipleSelectPage;
  }

  getSingleSelectPage() {
    return this.singleSelectPage;
  }

  getCheckboxsPage() {
    return this.checkboxsPage;
  }

  getSingleCheckboxPage() {
    return this.singleCheckBoxPage;
  }

  getDisabledButtonPage() {
    return this.disabledButtonPage;
  }

  getLooksLikeAButtonPage() {
    return this.looksLikeAButtonPage;
  }

  getSimpleButtonPage() {
    return this.simpleButtonPage;
  }

  getTextInputFieldPage() {
    return this.textInputFieldPage;
  }

  getBasePage() {
    return this.basePage;
  }
}

module.exports = { POManager };
