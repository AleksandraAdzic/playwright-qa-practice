const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const { faker } = require("@faker-js/faker");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/alert/prompt");
});

test("Confrimation Box - check button", async ({ page }) => {
  const poManager = new POManager(page);
  const promptBox = poManager.getPromptBoxPage();

  await expect(promptBox.clickButton).toHaveText("Click");
});

test.only("Confrimation Box - check PromptBox", async ({ page }) => {
  const poManager = new POManager(page);
  const promptBox = poManager.getPromptBoxPage();

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter some text");
    await dialog.accept();
  });

  await promptBox.clickClickButton();
});

test("Confrimation Box - press Cancel button", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const promptBox = poManager.getPromptBoxPage();

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    await dialog.dismiss();
  });

  await promptBox.clickClickButton();
  await expect(basePage.resultText).toHaveText("You canceled the prompt");
});

test("Confrimation Box - press OK button without text", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const promptBox = poManager.getPromptBoxPage();

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });

  await promptBox.clickClickButton();
  await expect(basePage.resultText).toHaveText("You entered nothing");
});

test("Confrimation Box - press OK button with text", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const promptBox = poManager.getPromptBoxPage();
  const text = faker.lorem.word();

  page.on("dialog", async (dialog) => {
    await dialog.accept(text);
  });

  await promptBox.clickClickButton();
  await expect(basePage.resultText).toHaveText(text);
});
