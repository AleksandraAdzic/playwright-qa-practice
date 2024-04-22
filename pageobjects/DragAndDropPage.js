class DragAndDropPage {
  constructor(page) {
    this.page = page;
    this.dragMe = page.locator("#rect-draggable");
    this.dropHere = page.locator("#rect-droppable");
    this.textAfterDrag = page.locator("#text-droppable");
  }

  async dragAndDrop() {
    await this.dragMe.dragTo(this.dropHere);
  }
}

module.exports = { DragAndDropPage };
