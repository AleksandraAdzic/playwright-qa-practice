const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo(
    "https://www.qa-practice.com/elements/button/simple"
  );
});

test("Simple Button", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await expect(basePage.submitButton).toHaveAttribute("value", "Click");
  await basePage.clickSubmitButton(basePage.submitButton);
  await expect(basePage.resultText).toHaveText("Submitted");
});

test("Simple Button - confirmation that button is clicked", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
 
  await basePage.clickSubmitButton(basePage.submitButton);
  await expect(basePage.resultText).toHaveText("Submitted");
});
