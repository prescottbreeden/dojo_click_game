class NpcComponent {
  constructor(lvl = 1) {
    this.name = name;
    this.lvl = lvl;
    this.health = lvl * 20;
    this.max_health = lvl * 20;
  }

  render() {
    throw Error("Not implemented method");
  }
}