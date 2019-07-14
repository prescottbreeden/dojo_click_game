class Header {
  constructor() {
    this.elements = [
      h('h1', 'Dojos and Dragons', ['header__title']),
      this.newGameButton() 
    ]
  }
  render() {
    return addChildren(header(['header']), this.elements);
  }

  newGameButton() {
    const newButt = btn('New Game', ['btn', 'header__btn']);
    newButt.addEventListener('click', () => {
      location.reload();
    })
    return newButt;
  }
}