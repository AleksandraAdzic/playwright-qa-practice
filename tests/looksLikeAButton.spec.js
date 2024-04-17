const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo(
    "https://www.qa-practice.com/elements/button/like_a_button"
  );
});

test("Looks like a Button - check name of label", async ({ page }) => {
  const poManager = new POManager(page);
  const looksLikeAButtonPage = poManager.getLooksLikeAButtonPage();

  await expect(looksLikeAButtonPage.clickButton).toHaveText("Click");
});

test("Looks like a Button - check result Text after clcik", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const looksLikeAButtonPage = poManager.getLooksLikeAButtonPage();

  await basePage.clickSubmitButton(looksLikeAButtonPage.clickButton);
  await expect(basePage.resultText).toHaveText("Submitted");
});
