function capitalizeWord(word) {
  let desc = word[0].toUpperCase()
  for (let i = 1; i < word.length; i++) {
    desc += word[i];
  }
  return desc;
}

function random(min, max) {
  return ~~(Math.random() * (max + 1 - min)) + min;
}