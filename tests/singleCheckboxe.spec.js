const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo(
    "https://www.qa-practice.com/elements/checkbox/single_checkbox"
  );
});

test("Single Checkbox - check number and name", async ({ page }) => {
  const poManager = new POManager(page);
  const singleCheckboxPage = poManager.getSingleCheckboxPage();

  await expect(singleCheckboxPage.allCheckboxs).toHaveCount(1);
  await expect(singleCheckboxPage.textLabel).toHaveText("Select me or not");
});

test("Single Checkbox - check if button is disabled", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();

  await expect(basePage.submitButton).not.toHaveAttribute("disabled");
});

test("Single Checkbox - submit check chekbox", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const singleCheckboxPage = poManager.getSingleCheckboxPage();

  await singleCheckboxPage.clickSelect();
  await singleCheckboxPage.clickSubmitButton();
  await expect(basePage.resultText).toHaveText("select me or not");
});
