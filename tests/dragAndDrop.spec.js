const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/dragndrop/boxes");
});

test("Drag And Drop - check  bottom square", async ({ page }) => {
  const poManager = new POManager(page);
  const dragAndDrop = poManager.getDragAndDropPage();

  await expect(dragAndDrop.dragMe).toHaveCSS("position", "relative");
});

test("Drag And Drop", async ({ page }) => {
  const poManager = new POManager(page);
  const dragAndDrop = poManager.getDragAndDropPage();
  await dragAndDrop.dragAndDrop();
  await expect(dragAndDrop.textAfterDrag).toHaveText("Dropped!");
  await expect(dragAndDrop.dragMe).not.toHaveCSS("position", "relative");
});

test("Drag And Drop - check  bottom square after drag and drop", async ({
  page,
}) => {
  const poManager = new POManager(page);
  const dragAndDrop = poManager.getDragAndDropPage();
  await dragAndDrop.dragAndDrop();

  await expect(dragAndDrop.dragMe).not.toHaveCSS("position", "relative");
});
