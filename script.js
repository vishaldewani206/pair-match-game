let cards = document.querySelectorAll('.card');
let imageNum = Math.floor(Math.random() * 5);
let display = true;
let lastI;
let cardsValue = [];
let firstValue;
let secondValue;

//for getting value of cards and storing it into cardsValue
for (let j = 0; j < cards.length; j++) {
  cardsValue.push(cards[j].getAttribute('value'));
}
//for randomizing cardsValue
for (let i = cardsValue.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = cardsValue[i];
  cardsValue[i] = cardsValue[j];
  cardsValue[j] = temp;
}
//for changing innerHtml of cards div
for (let i = 0; i < cardsValue.length; i++) {
  cards[i].innerHTML = cardsValue[i];
}
console.log(cardsValue);

//main function of cards diplay
for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {};
}
