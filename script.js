let cards = document.querySelectorAll('.card');
let cardsContainer = document.querySelector('.cards');
let wrongGuessP = document.querySelector('.wrong');
let imageNum = Math.floor(Math.random() * 5);
let display = true;
let lastI;
let cardsValue = [];
let clickedValue;
let cardNum;
let wrongGuess = 0;
let startBtn = document.querySelector('#start');
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
//start button
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  cardsContainer.style.display = 'grid';
});
console.log(cardsValue);

//main function of cards diplay
for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    if (display) {
      cards[i].style.backgroundImage = 'url("' + cardsValue[i] + '.jpg")';
      clickedValue = cardsValue[i];
      cardNum = i;
      console.log(clickedValue);
      display = false;
    } else {
      if (clickedValue == cardsValue[i]) {
        cards[i].style.backgroundImage = 'url("' + cardsValue[i] + '.jpg")';
        display = true;
        cardNum = i;
        clickedValue = cardsValue[i];
      } else {
        cards[i].style.backgroundImage = 'url("' + cardsValue[i] + '.jpg")';
        cards[cardNum].style.backgroundImage = '';
        cardNum = i;
        clickedValue = cardsValue[i];
        wrongGuess++;
        wrongGuessP.innerHTML = `Wrong Guesses: ${wrongGuess}`;
      }
    }
  };
}
