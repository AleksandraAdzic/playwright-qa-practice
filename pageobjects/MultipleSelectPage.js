class MultipleSelectPage {
  constructor(page) {
    this.page = page;
    this.textForLabel = page.locator("label");
    this.selectField = page.locator("select");
    this.chooseThePlace = page.locator("#id_choose_the_place_you_want_to_go");
    this.chooseHowToGetThere = page.locator(
      "#id_choose_how_you_want_to_get_there"
    );
    this.chooseWhenToGo = page.locator("#id_choose_when_you_want_to_go");
  }

  async selectOption(number, locator) {
    const num = Math.floor(Math.random() * number) + 1;
    await locator.selectOption({ index: num });
    const list = await locator.getByRole("option").all();
    const text = await list[num].textContent();
    return text;
  }

  async selectPlace() {
    const place = await this.selectOption(5, this.chooseThePlace);
    return place;
  }

  async selectHow() {
    const how = await this.selectOption(4, this.chooseHowToGetThere);
    return how;
  }
  async selectWhen() {
    const when = await this.selectOption(3, this.chooseWhenToGo);
    return when;
  }

  async finaleText() {
    const place = await this.selectPlace();
    const how = await this.selectHow();
    const when = await this.selectWhen();
    const text = (
      "to go by " +
      how +
      " to the " +
      place +
      " " +
      when
    ).toLowerCase();
    return text;
  }
}

module.exports = { MultipleSelectPage };
