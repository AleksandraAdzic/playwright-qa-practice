const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/alert/confirm");
});

test("Confrimation Box - check button", async ({ page }) => {
  const poManager = new POManager(page);
  const confirmationBoxPage = poManager.getConfirmationBoxPage();

  await expect(confirmationBoxPage.clickButton).toHaveText("Click");
});

test("Confrimation Box - check text of alert box", async ({ page }) => {
  const poManager = new POManager(page);
  const confirmationBoxPage = poManager.getConfirmationBoxPage();
  page.on("dialog", async (dialog) => {
    //expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Select Ok or Cancel");
    // await dialog.accept();
  });
  await confirmationBoxPage.clickClickButton();
});

test("Confrimation Box - click on OK button", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const confirmationBoxPage = poManager.getConfirmationBoxPage();

  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
  await confirmationBoxPage.clickClickButton();
  await expect(basePage.resultText).toHaveText("Ok");
});

test("Confrimation Box - click on Cancel button", async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  const confirmationBoxPage = poManager.getConfirmationBoxPage();

  page.on("dialog", async (dialog) => {
    await dialog.dismiss();
  });
  await confirmationBoxPage.clickClickButton();
  await expect(basePage.resultText).toHaveText("Cancel");
});
