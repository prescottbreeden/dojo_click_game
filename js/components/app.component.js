class App {
  constructor() {
    this.header = new Header();
    this.game = new Game();
  }

  renderNestedComponents() {
    const elements = [
      this.header,
      this.game
    ]
    return elements.map(ele => ele.render());
  }

  render() {
    addChildren(root, this.renderNestedComponents())
  }
}