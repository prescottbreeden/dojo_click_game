class StatusBar {
  constructor(health, max_health, type) {
    this.type = type;
    this.health = health;
    this.max_health = max_health;
  }

  render() {
    const elements = [
      this.healthBar(),
      p(this.health + '/' + this.max_health, ['status-bar__hp']),
    ]
    return addChildren(div([this.type, 'status-bar']), elements);
  }

  healthBar() {
    const hbar = div(['status-bar__health']);
    hbar.style.width = `${(this.health/this.max_health)*100}%`;
    hbar.style.backgroundColor = this.type;
    return hbar;
  }

}