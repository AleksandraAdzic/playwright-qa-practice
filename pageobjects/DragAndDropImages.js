class DragAndDropImages {
  constructor(page) {
    this.page = page;
    this.image = page.locator("img").last();
    this.firstSquare = page.locator("#rect-droppable1");
    this.secondSquare = page.locator("#rect-droppable2");
    this.firstText = page.locator(".text-droppable").first();
    this.secondText = page.locator(".text-droppable").last();
  }

  async dragAndDropFirst() {
    await this.image.dragTo(this.secondSquare);
  }

  async dragAndDropSecend() {
    await this.image.dragTo(this.firstSquare);
  }

  async twoDragAndDrop() {
    await this.dragAndDropFirst();
    await this.dragAndDropSecend();
  }
}

module.exports = { DragAndDropImages };
