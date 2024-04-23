const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/popup/modal");
});

test("Modal pop up - check button name", async ({ page }) => {
  const poManager = new POManager(page);
  const modalPopUpPage = poManager.getModalPopUpPage();

  await expect(modalPopUpPage.popUpButton).toHaveText("Launch Pop-Up");
});

test("Modal pop up - check pop up open", async ({ page }) => {
  const poManager = new POManager(page);
  const modalPopUpPage = poManager.getModalPopUpPage();

  await modalPopUpPage.clickPopUpButton();
  await expect(modalPopUpPage.modalPopUp).toHaveClass(/show/);
});

test("Modal pop up - check text in popup", async ({ page }) => {
  const poManager = new POManager(page);
  const modalPopUpPage = poManager.getModalPopUpPage();

  await modalPopUpPage.clickPopUpButton();
  await expect(modalPopUpPage.titlePopUP).toHaveText("I am a Pop-Up");
  await expect(modalPopUpPage.labelText).toHaveText("Select me or not");
});


test("Modal pop up - send selected checkbox", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const modalPopUpPage = poManager.getModalPopUpPage();

  await modalPopUpPage.sendSelectedCheckbox();
  await expect(basePage.resultText).toHaveText("select me or not");
});

test("Modal pop up - send unchecked checkbox", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const modalPopUpPage = poManager.getModalPopUpPage();

  await modalPopUpPage.sendUncheckedCheckbox();
  await expect(basePage.resultText).toHaveText("None");
});
