class HeaderComponent {
  constructor() { }

  render() {
    const elements = [
      h('h1', 'Dojos and Dragons', ['header__title']),
      this.newGameButton() 
    ]
    return addChildren(header(['header']), elements);
  }

  newGameButton() {
    const newButt = btn('New Game', ['btn', 'header__btn']);
    newButt.addEventListener('click', () => {
      location.reload();
    })
    return newButt;
  }
}