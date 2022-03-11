class Card {

    sing;
    value;

    constructor(sing, value) {
        this.sing = sing;
        this.value = value;
    }
    getCrad(){
        return this.sing + this.value;
    }
}

  let cardsAll = [];
  let cardValue = [2,3,4,5,6,7,8,9,10,"ace","jack","queen","king"];
  let signs =["clubs","diamonds","hearts","spades"];

  signs.forEach(sign =>{
      cardValue.forEach(val => {
          cardsAll.push(new Card(sign,val));
      })
  })