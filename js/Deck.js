class Deck{

    cards;
    cardsCopy;
    constructor(cards){
        this.cards = cards;
        this.cardsCopy = [].concat(this.cards);
    }

    fiveRandomCards() {
        let fiveRandomCards = [];
        if(this.cards.length < 6){
            this.cards = [].concat(this.cards);
        }
        for(let i=0;i < 5; i++){
            let rand = Math.floor(Math.random() * this.cards.length);
            fiveRandomCards.push(this.cards[rand]);
            this.cards.slice(rand,1);
        }
        return fiveRandomCards;
    }
}
let deck = new Deck(cardsAll);