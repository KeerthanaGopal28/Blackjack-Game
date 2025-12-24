
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let player={
  name :"Keerthana",
  chips: 145,
} 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+player.chips
function getRandomCard(){
  let returnedNum= Math.floor(Math.random()*13)+1
  if (returnedNum == 1){
    return 11
  }
  else if (returnedNum>10) {
    return 10
  }
  else{
    return returnedNum
  }
}
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards=[firstCard,secondCard]
  sum = firstCard+secondCard
  renderGame()
}
function renderGame() {
     cardEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i=i+1){
      cardEl.textContent +=cards[i] + " " 

    }
    
    sumEl.textContent="Sum: " + sum
    if (sum<=20){

      message="Do you want to draw new card"
    }
    else if (sum===21){
       message="Wohoo! Got Blackjack"
       hasBlackJack = true
    }
    else {
        message="You are out of Game!"
        isAlive = false
    }
    messageEl.textContent = message 
}
function newCard() {
  if (isAlive && !hasBlackJack){
    let card = getRandomCard()
    sum +=card
    cards.push(card)
    renderGame()
  }
  
}
