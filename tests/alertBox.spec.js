const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/alert/alert");
});

test.only("AlertBox - confirm dialog", async ({ page }) => {
  const poManager = new POManager(page);
  const alertBox = poManager.getAlertBoxPage();

  await alertBox.clickClickButton();
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("I am an alert!");
    await dialog.accept();
  });
});
