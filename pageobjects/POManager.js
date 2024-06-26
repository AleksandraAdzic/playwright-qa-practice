const { BasePage } = require("./BasePage");
const { TextInputFieldPage } = require("./TextInputFieldPage");
const { LooksLikeAButtonPage } = require("./LooksLikeAButtonPage");
const { DisabledButtonPage } = require("./DisabledButtonPage");
const { SingleChekboxPage } = require("./SingleChekboxPage");
const { CheckboxsPage } = require("./CheckboxesPage");
const { SingleSelectPage } = require("./SingleSelectPage");
const { MultipleSelectPage } = require("./MultipleSelectPage");
const { TextAreaPage } = require("./TextAreaPage");
const { MultipleTextareas } = require("./MultipleTextareas");
const { AlertBoxPage } = require("./AlertBoxPage");
const { ConfirmationBoxPage } = require("./ConfirmationBoxPage");
const { PromptBoxPage } = require("./PromptBoxPage");
const { DragAndDropPage } = require("./DragAndDropPage");
const { DragAndDropImages } = require("./DragAndDropImages");
const { ModalPopUpPage } = require("./ModalPopUpPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.textInputFieldPage = new TextInputFieldPage(page);
    this.looksLikeAButtonPage = new LooksLikeAButtonPage(page);
    this.disabledButtonPage = new DisabledButtonPage(page);
    this.singleCheckBoxPage = new SingleChekboxPage(page);
    this.checkboxsPage = new CheckboxsPage(page);
    this.singleSelectPage = new SingleSelectPage(page);
    this.multipleSelectPage = new MultipleSelectPage(page);
    this.textAreaPage = new TextAreaPage(page);
    this.multipleTextareas = new MultipleTextareas(page);
    this.alertBoxPage = new AlertBoxPage(page);
    this.confirmationBoxPage = new ConfirmationBoxPage(page);
    this.promptBoxPage = new PromptBoxPage(page);
    this.dragAndDropPage = new DragAndDropPage(page);
    this.dragAndDropImages = new DragAndDropImages(page);
    this.modalPopUpPage = new ModalPopUpPage(page);
  }

  getModalPopUpPage() {
    return this.modalPopUpPage;
  }

  getDragAndDropImages() {
    return this.dragAndDropImages;
  }

  getDragAndDropPage() {
    return this.dragAndDropPage;
  }

  getPromptBoxPage() {
    return this.promptBoxPage;
  }

  getConfirmationBoxPage() {
    return this.confirmationBoxPage;
  }

  getAlertBoxPage() {
    return this.alertBoxPage;
  }

  getMultipleTextareas() {
    return this.multipleTextareas;
  }

  getTextAreaPage() {
    return this.textAreaPage;
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

  getTextInputFieldPage() {
    return this.textInputFieldPage;
  }

  getBasePage() {
    return this.basePage;
  }
}

module.exports = { POManager };
