class Game {

 constructor(){
     this.btn =document.querySelector('button');
     this.cards = document.querySelectorAll(".img_holder");
     this.cardIndex = 0;
     this.rendomFiveCards = [];
     this.round = 0;
     this.finalCards = [];
 }
 init(){
    this.btn.addEventListener('click', ()=> this.flip());
 }
 flip(){
     (this.round === 1) ? this.round = 2 : this.round = 1;
     this.btn.innerHTML = "Start " + this.round;
     this.cardIndex = 0;
     this.turnOnBack();
 }
    turnOnBack(){
        this.cards.forEach(card=> {
            let front = card.querySelector('.front');
            let back = card.children[1];
            front.style.transform = "perspective(900px) rotateY(180deg)";
            back.style.transform = "perspective(900px) rotateY(0)";

        })
        setTimeout(()=>{
            this.shuffleCards();
            this.reveal();
        },100);
    }
    reveal(){
     let cardFront = this.cards[this.cardIndex].querySelector('.front');
     let cardBack = this.cards[this.cardIndex].querySelector('.back');
     this.finalCards[this.cardIndex] = this.rendomFiveCards[this.cardIndex];
     setTimeout(()=>{
         cardBack.style.transform = "perspective(900px) rotateY(180deg)";
         cardFront.style.transform = "perspective(900px) rotateY(0)";
         this.cardIndex ++;
         if(this.cardIndex < this.cards.length){
             this.reveal();
         }
     },100)
    }
    shuffleCards(){
     this.rendomFiveCards = deck.fiveRandomCards();
    }
}
let game = new Game();
game.init();
