class Game {
  constructor() {
    this.enemy = new Enemy('cactuar');
    this.player = new Player('Dojoman Sephiroth');
  }

  renderNestedComponents() {
    const elements = [
      this.enemy, 
      this.player,
    ];
    return elements.map(ele => ele.render());
  }

  render() {
    return addChildren(section(['game']), this.renderNestedComponents());
  }

  createNewEnemy() {
    this.enemy = new Enemy('atma');
  }

}