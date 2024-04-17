const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/button/disabled");
});

test("Disabled Button - buttons should be disabled", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();

  await expect(basePage.submitButton).toHaveAttribute("disabled");
});

test("Disabled Button - when option is enabled", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const disabledButtonPage = poManager.getDisabledButtonPage();

  await disabledButtonPage.selectEnabledOption();
  await basePage.clickSubmitButton(basePage.submitButton);
  await expect(basePage.resultText).toHaveText("Submitted");
});

test("Disabled Button - when option is disabled", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const disabledButtonPage = poManager.getDisabledButtonPage();

  await disabledButtonPage.selectDisabledOption();
  await expect(basePage.submitButton).toHaveAttribute("disabled");
});
