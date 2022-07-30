
window.onload= function deckBuilder() {
  const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
  const pintas = ["♦", "♥", "♠", "♣"];
  
  let randomCards = Math.floor(Math.random() * cards.length);
  let randomPintas = Math.floor(Math.random() * pintas.length);

document.querySelector(".pintas1").innerHTML = pintas[randomPintas]
document.querySelector(".cards").innerHTML = cards[randomCards]
document.querySelector(".pintas2").innerHTML = pintas[randomPintas]

if (pintas[randomPintas] == "♦" || pintas[randomPintas] == "♥"){

  document.querySelector(".pintas1").style.color="red"
  document.querySelector(".cards").style.color="red"
  document.querySelector(".pintas2").style.color="red"
}

}


