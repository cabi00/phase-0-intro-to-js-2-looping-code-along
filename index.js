// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(names, event){
    let thanks = []
    for(let n = 0; n < names.length; n++) {
        thanks.push("Thank you, " + names[n] + ", for the wonderful " + event+ " gift!");
    }
    return thanks;
}

function countDown(n){
    while(n >= 0){
        console.log(n);
        n--;
    }
}