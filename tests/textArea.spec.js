const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const { base } = require("@faker-js/faker");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/textarea/single");
});

test("Text Area - check label text", async ({ page }) => {
  const poManager = new POManager(page);
  const textArea = poManager.getTextAreaPage();

  await expect(textArea.textForLabel).toHaveText("Text area*");
});

test("Text Area - check if field is required", async ({ page }) => {
  const poManager = new POManager(page);
  const textArea = poManager.getTextAreaPage();

  await expect(textArea.textArea).toHaveAttribute("required");
});

test("Text Area - check result text", async ({ page }) => {
  const poManager = new POManager(page);
  const textArea = poManager.getTextAreaPage();
  const basePage = poManager.getBasePage();

  const text = await textArea.fillTextAndPressButton();
  await expect(basePage.resultText).toHaveText(text);
});
