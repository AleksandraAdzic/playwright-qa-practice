const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo(
    "https://www.qa-practice.com/elements/select/mult_select"
  );
});

test("Multiple Select  - check number of field", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleSelectPage = poManager.getMultipleSelectPage();

  await expect(multipleSelectPage.selectField).toHaveCount(3);
});

test("Multiple Select  - check text of label", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleSelectPage = poManager.getMultipleSelectPage();

  await expect(multipleSelectPage.textForLabel).toHaveText([
    "Choose the place you want to go*",
    "Choose how you want to get there*",
    "Choose when you want to go*",
  ]);
});

test("Multiple Select  - all fields are required ", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleSelectPage = poManager.getMultipleSelectPage();

  await expect(multipleSelectPage.chooseThePlace).toHaveAttribute("required");
  await expect(multipleSelectPage.chooseHowToGetThere).toHaveAttribute(
    "required"
  );
  await expect(multipleSelectPage.chooseWhenToGo).toHaveAttribute("required");
});

test.only("Multiple Select  - result text ", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleSelectPage = poManager.getMultipleSelectPage();
  const basePage = poManager.getBasePage();

  const text = await multipleSelectPage.finaleText();
  await basePage.clickSubmitButtonFromLocator();
  await expect(basePage.resultText).toHaveText(text);
});
