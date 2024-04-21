const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo(
    "https://www.qa-practice.com/elements/textarea/textareas"
  );
});

test("Multiple Textarea - check name of taxtarea", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleTextareas = poManager.getMultipleTextareas();

  await expect(multipleTextareas.labelForText).toHaveText([
    "First chapter*",
    "Second chapter",
    "Third chapter",
  ]);
});

test("Multiple Textarea - check if taxtarea is required", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleTextareas = poManager.getMultipleTextareas();

  await expect(multipleTextareas.firstTextarea).toHaveAttribute("required");
});

test("Multiple Textarea - fill only required taxtarea", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleTextareas = poManager.getMultipleTextareas();
  const basePage = poManager.getBasePage();

  const text = await multipleTextareas.enterTextInFirstTextarea();
  await basePage.clickSubmitButtonFromLocator();
  await expect(basePage.resultText).toHaveText(text);
});

test("Multiple Textarea - fill all taxtareas", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleTextareas = poManager.getMultipleTextareas();
  const basePage = poManager.getBasePage();

  const text = await multipleTextareas.fillAllTextareas();
  await basePage.clickSubmitButtonFromLocator();
  await expect(basePage.resultText).toHaveText(text);
});

test.only("Multiple Textarea - fill two taxtareas", async ({ page }) => {
  const poManager = new POManager(page);
  const multipleTextareas = poManager.getMultipleTextareas();
  const basePage = poManager.getBasePage();

  const text = await multipleTextareas.fillTwoTextares();
  await basePage.clickSubmitButtonFromLocator();
  await expect(basePage.resultText).toHaveText(text);
});
