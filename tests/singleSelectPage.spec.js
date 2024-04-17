const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo(
    "https://www.qa-practice.com/elements/select/single_select"
  );
});

test("Single Select  - check label text", async ({ page }) => {
  const poManager = new POManager(page);
  const singleSelectPage = poManager.getSingleSelectPage();

  await expect(singleSelectPage.textForLabel).toHaveText("Choose language*");
});

test("Single Select  - check if options are required", async ({ page }) => {
  const poManager = new POManager(page);
  const singleSelectPage = poManager.getSingleSelectPage();

  await expect(singleSelectPage.selectOption).toHaveAttribute("required");
});

test("Single Select  - check randum select", async ({ page }) => {
  const poManager = new POManager(page);
  const singleSelectPage = poManager.getSingleSelectPage();
  const basePage = poManager.getBasePage();

  const text = await singleSelectPage.selectRandumOption();
  await basePage.clickSubmitButtonFromLocator();
  await expect(basePage.resultText).toHaveText(text);
});
