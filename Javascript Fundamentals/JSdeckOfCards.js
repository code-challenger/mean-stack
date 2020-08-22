class Deck{
    constructor(suit, count){
        this.suit = suit;
        this.count = count;
    }

    //works for reset
    makeDeck(){
        this.dealerDeck = [];
        var cards = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
        var suits = ["hearts","spade","diamond","clubs"];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < cards.length; j++) {
                this.dealerDeck.push(`${cards[j]} of ${suits[i]}`);
            }
        }
        return this; 
    }

    shuffleDeck(count){
        var i;
        var j;
        var k;
        var temp;

        for(i = 0; i < count; i++){
            for( j = 0; j < this.dealerDeck.length; j++){
                k = Math.floor(Math.random() * this.dealerDeck.length);
                temp = this.dealerDeck[j];
                this.dealerDeck[j] = this.dealerDeck[k];
                this.dealerDeck[k] = temp;
            }
        }
    }

    deal(){
        return this.deck.pop();
    }    
};

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    drawDeck(deck){
        this.hand.push(deck.deal());
        return this;
    }

    discardCard(){
        this.hand.pop();
        return this;
    }

    
}

var deck = new Deck();
deck.makeDeck();
console.log(deck);
deck.shuffleDeck(4);
console.log(deck);
//reset deck
// deck.makeDeck();
// console.log(deck);


