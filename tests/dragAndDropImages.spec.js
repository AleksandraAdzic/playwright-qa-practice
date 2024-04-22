const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const basePage = poManager.getBasePage();
  await basePage.toGo("https://www.qa-practice.com/elements/dragndrop/images");
});

test("Drag and Drop Images - one drag and drop", async ({ page }) => {
  const poManager = new POManager(page);
  const dragAndDropImages = poManager.getDragAndDropImages();

  await dragAndDropImages.dragAndDropFirst();
  await expect(dragAndDropImages.firstText).toHaveText("Dropped!");
});

test("Drag and Drop Images - two drag and drop", async ({ page }) => {
  const poManager = new POManager(page);
  const dragAndDropImages = poManager.getDragAndDropImages();

  await dragAndDropImages.twoDragAndDrop();
  await expect(dragAndDropImages.secondText).toHaveText("Dropped!");
});
