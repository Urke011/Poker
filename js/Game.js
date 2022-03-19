class Game {

 constructor(){
     this.btn =document.querySelector('button');
     this.cards = document.querySelectorAll(".img_holder");
 }
 init(){
    this.btn.addEventListener('click', ()=> this.flip());
 }
 flip(){
     this.cards.forEach(card=> {
         let front = card.querySelector('.front');
         let back = card.children[1];
         front.style.transform = "perspective(900px) rotateY(0)";
         back.style.transform = "perspective(900px) rotateY(180deg)";
     })
 }
}
let game = new Game();
game.init();
